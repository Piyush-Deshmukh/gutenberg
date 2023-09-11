/**
 * Internal dependencies
 */
import type { Editor } from './index';

/**
 * Returns the edited blocks.
 *
 * @param this
 *
 * @return  The blocks.
 */
export async function getBlocks( this: Editor ) {
	return await this.page.evaluate( () => {
		const blocks = window.wp.data.select( 'core/block-editor' ).getBlocks();

		// The editor might still contain an unmodified empty block even when it's technically "empty".
		if (
			blocks.length === 1 &&
			window.wp.blocks.isUnmodifiedDefaultBlock( blocks[ 0 ] )
		) {
			return [];
		}

		function normaliseBlocks( _blocks: any[] ): any[] {
			return _blocks.map( ( block ) => {
				return {
					...block,
					attributes: Object.fromEntries(
						Object.entries( block.attributes ).map(
							( [ k, v ] ) => [ k, v?.valueOf() ]
						)
					),
					innerBlocks: normaliseBlocks( block.innerBlocks ),
				};
			} );
		}

		return normaliseBlocks( blocks );
	} );
}
