/**
 * WordPress dependencies
 */
import { MenuItem } from '@wordpress/components';
import { store as coreStore } from '@wordpress/core-data';
import { useDispatch } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';
import { store as noticesStore } from '@wordpress/notices';
import { privateApis as routerPrivateApis } from '@wordpress/router';

/**
 * Internal dependencies
 */
import {
	TEMPLATE_PART_POST_TYPE,
	PATTERN_THEME_TYPE,
	PATTERN_SYNC_STATUSES,
	PATTERN_POST_TYPE,
	PATTERN_DEFAULT_CATEGORY,
} from '../../utils/constants';
import {
	useExistingTemplateParts,
	getUniqueTemplatePartTitle,
	getCleanTemplatePartSlug,
} from '../../utils/template-part-create';
import { unlock } from '../../lock-unlock';

const { useHistory } = unlock( routerPrivateApis );

function getPatternMeta( item ) {
	if ( item.type === PATTERN_THEME_TYPE ) {
		return { wp_pattern_sync_status: PATTERN_SYNC_STATUSES.unsynced };
	}

	const syncStatus = item.reusableBlock.wp_pattern_sync_status;
	const isUnsynced = syncStatus === PATTERN_SYNC_STATUSES.unsynced;

	return {
		...item.reusableBlock.meta,
		wp_pattern_sync_status: isUnsynced ? syncStatus : undefined,
	};
}

export default function DuplicateMenuItem( {
	categoryId,
	item,
	label = __( 'Duplicate' ),
	onClose,
} ) {
	const { saveEntityRecord } = useDispatch( coreStore );
	const { createErrorNotice, createSuccessNotice } =
		useDispatch( noticesStore );

	const history = useHistory();
	const existingTemplateParts = useExistingTemplateParts();

	async function createTemplatePart() {
		try {
			const copiedTitle = sprintf(
				/* translators: %s: Existing template part title */
				__( '%s (Copy)' ),
				item.title
			);
			const title = getUniqueTemplatePartTitle(
				copiedTitle,
				existingTemplateParts
			);
			const slug = getCleanTemplatePartSlug( title );
			const { area, content } = item.templatePart;

			const result = await saveEntityRecord(
				'postType',
				'wp_template_part',
				{ slug, title, content, area },
				{ throwOnError: true }
			);

			createSuccessNotice(
				sprintf(
					// translators: %s: The new template part's title e.g. 'Call to action (copy)'.
					__( '"%s" duplicated.' ),
					item.title
				),
				{
					type: 'snackbar',
					id: 'edit-site-patterns-success',
				}
			);

			history.push( {
				postType: TEMPLATE_PART_POST_TYPE,
				postId: result?.id,
				categoryType: TEMPLATE_PART_POST_TYPE,
				categoryId,
			} );

			onClose();
		} catch ( error ) {
			const errorMessage =
				error.message && error.code !== 'unknown_error'
					? error.message
					: __(
							'An error occurred while creating the template part.'
					  );

			createErrorNotice( errorMessage, {
				type: 'snackbar',
				id: 'edit-site-patterns-error',
			} );
			onClose();
		}
	}

	async function createPattern() {
		try {
			const isThemePattern = item.type === PATTERN_THEME_TYPE;
			const title = sprintf(
				/* translators: %s: Existing pattern title */
				__( '%s (Copy)' ),
				item.title
			);

			const result = await saveEntityRecord(
				'postType',
				'wp_block',
				{
					content: isThemePattern
						? item.content
						: item.reusableBlock.content,
					meta: getPatternMeta( item ),
					status: 'publish',
					title,
				},
				{ throwOnError: true }
			);

			createSuccessNotice(
				sprintf(
					// translators: %s: The new pattern's title e.g. 'Call to action (copy)'.
					__( '"%s" duplicated.' ),
					item.title
				),
				{
					type: 'snackbar',
					id: 'edit-site-patterns-success',
				}
			);

			history.push( {
				categoryType: PATTERN_POST_TYPE,
				categoryId: PATTERN_DEFAULT_CATEGORY,
				postType: PATTERN_POST_TYPE,
				postId: result?.id,
			} );

			onClose();
		} catch ( error ) {
			const errorMessage =
				error.message && error.code !== 'unknown_error'
					? error.message
					: __( 'An error occurred while creating the pattern.' );

			createErrorNotice( errorMessage, {
				type: 'snackbar',
				id: 'edit-site-patterns-error',
			} );
			onClose();
		}
	}

	const createItem =
		item.type === TEMPLATE_PART_POST_TYPE
			? createTemplatePart
			: createPattern;

	return <MenuItem onClick={ createItem }>{ label }</MenuItem>;
}
