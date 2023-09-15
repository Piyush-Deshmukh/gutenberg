/**
 * WordPress dependencies
 */
import {
	Button,
	__experimentalHStack as HStack,
	__experimentalText as Text,
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { createInterpolateElement } from '@wordpress/element';
import { sprintf, __, _x, _n } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useDataTableContext } from './context';
import { DataTablePageSizeControl } from './datatable-actions';

export function DataTablePaginationTotalItems( {
	// If passed, use it as it's for controlled pagination.
	totalItems = 0,
} ) {
	const table = useDataTableContext();
	return (
		<span>
			{ sprintf(
				// translators: %s: Total number of items id lists.
				__( '%s items' ),
				totalItems || table.getCoreRowModel().rows.length
			) }
		</span>
	);
}

//This function implements a pagination style similar to WP core's `paginate_links`.
// It's not used currently, but was suggested in some of the designs.
export function DataTablePaginationNumbers() {
	const table = useDataTableContext();
	const totalPages = table.getPageCount();
	if ( ! totalPages ) {
		return null;
	}
	const currentPage = table.getState().pagination.pageIndex + 1;
	const pageLinks = [];
	const midSize = 2;
	const endSize = 1;
	let dots = false;
	for ( let i = 1; i <= totalPages; i++ ) {
		const isActive = i === currentPage;
		if ( isActive ) {
			pageLinks.push(
				<Button
					key={ i }
					className="current"
					isPressed={ true }
					text={ i }
				/>
			);
			dots = true;
		} else if (
			i <= endSize ||
			( currentPage &&
				i >= currentPage - midSize &&
				i <= currentPage + midSize ) ||
			i > totalPages - endSize
		) {
			pageLinks.push(
				<Button
					key={ i }
					onClick={ () => table.setPageIndex( i - 1 ) }
					text={ i }
				/>
			);
			dots = true;
		} else if ( dots ) {
			pageLinks.push( <Button key={ i } disabled={ true } text="..." /> );
			dots = false;
		}
	}
	return (
		<HStack justify="flex-start" spacing={ 0 } style={ { width: 'auto' } }>
			{ pageLinks }
		</HStack>
	);
}

// For now I copied the patterns list Pagination component, because
// the datatable pagination starts from index zero(`0`).
export function DataTablePagination( {
	// If passed, use it as it's for controlled pagination.
	totalItems = 0,
} ) {
	const table = useDataTableContext();
	const currentPage = table.getState().pagination.pageIndex + 1;
	const numPages = table.getPageCount();
	const _totalItems = totalItems || table.getCoreRowModel().rows.length;
	return (
		<HStack
			expanded={ false }
			spacing={ 3 }
			justify="space-between"
			className="edit-site-patterns__grid-pagination"
		>
			<Text variant="muted">
				{
					// translators: %s: Total number of entries.
					sprintf(
						// translators: %s: Total number of entries.
						_n( '%s item', '%s items', _totalItems ),
						_totalItems
					)
				}
			</Text>
			<HStack expanded={ false } spacing={ 1 }>
				<Button
					variant="tertiary"
					onClick={ () => table.setPageIndex( 0 ) }
					disabled={ ! table.getCanPreviousPage() }
					aria-label={ __( 'First page' ) }
				>
					«
				</Button>
				<Button
					variant="tertiary"
					onClick={ () => table.previousPage() }
					disabled={ ! table.getCanPreviousPage() }
					aria-label={ __( 'Previous page' ) }
				>
					‹
				</Button>
				<HStack justify="flex-start" expanded={ false } spacing={ 1 }>
					{ createInterpolateElement(
						sprintf(
							// translators: %1$s: Current page number, %2$s: Total number of pages.
							_x( '<CurrenPageControl /> of %2$s', 'paging' ),
							currentPage,
							numPages
						),
						{
							CurrenPageControl: (
								<NumberControl
									aria-label={ __( 'Current page' ) }
									min={ 1 }
									max={ numPages }
									onChange={ ( value ) => {
										if ( value > numPages ) return;
										table.setPageIndex( value - 1 );
									} }
									step="1"
									value={ currentPage }
									isDragEnabled={ false }
									spinControls="none"
								/>
							),
						}
					) }
				</HStack>
				<Button
					variant="tertiary"
					onClick={ () => table.nextPage() }
					disabled={ ! table.getCanNextPage() }
					aria-label={ __( 'Next page' ) }
				>
					›
				</Button>
				<Button
					variant="tertiary"
					onClick={ () =>
						table.setPageIndex( table.getPageCount() - 1 )
					}
					disabled={ ! table.getCanNextPage() }
					aria-label={ __( 'Last page' ) }
				>
					»
				</Button>
			</HStack>
			<DataTablePageSizeControl />
		</HStack>
	);
}
