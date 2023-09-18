/**
 * External dependencies
 */
import classnames from 'classnames';
import { flexRender } from '@tanstack/react-table';

/**
 * WordPress dependencies
 */
import { Icon, chevronDown, chevronUp } from '@wordpress/icons';
import { __experimentalHStack as HStack } from '@wordpress/components';
import { forwardRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useDataTableContext } from './context';

// type DataTableRowsProps = {
// 	className?: string;
// 	isLoading: boolean;
// };

function SortingIcon( { header } ) {
	const sortDirection = header.column.getIsSorted();
	if ( ! header.column.getCanSort() || ! sortDirection ) {
		return null;
	}
	return <Icon icon={ sortDirection === 'asc' ? chevronUp : chevronDown } />;
}

function DataTableRows(
	{ className = 'datatable-component__table', isLoading = false },
	ref
) {
	const table = useDataTableContext();
	const { rows } = table.getRowModel();
	const hasRows = !! rows?.length;
	if ( isLoading ) {
		// Add spinner or progress bar..
		return <h3>Loading now..</h3>;
	}
	return (
		<>
			{ hasRows && (
				<table ref={ ref } className={ className }>
					<thead>
						{ table.getHeaderGroups().map( ( headerGroup ) => (
							<tr key={ headerGroup.id }>
								{ headerGroup.headers.map( ( header ) => (
									<th
										key={ header.id }
										colSpan={ header.colSpan }
										style={ {
											width:
												header.column.columnDef.width ||
												undefined,
											maxWidth:
												header.column.columnDef
													.maxWidth || undefined,
										} }
									>
										{ header.isPlaceholder ? null : (
											// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
											<HStack
												justify="flex-start"
												alignment="center"
												className={ classnames( {
													'header-is-sortable':
														header.column.getCanSort(),
												} ) }
												onClick={ header.column.getToggleSortingHandler() }
											>
												<span
													style={ {
														// TODO: Handle properly..
														lineHeight: '24px',
													} }
												>
													{ flexRender(
														header.column.columnDef
															.header,
														header.getContext()
													) }
												</span>
												<SortingIcon
													header={ header }
												/>
											</HStack>
										) }
									</th>
								) ) }
							</tr>
						) ) }
					</thead>
					<tbody>
						{ rows.map( ( row ) => (
							<tr key={ row.id }>
								{ row.getVisibleCells().map( ( cell ) => (
									<td
										key={ cell.id }
										style={ {
											width:
												cell.column.columnDef.width ||
												undefined,
											maxWidth:
												cell.column.columnDef
													.maxWidth || undefined,
										} }
									>
										{ flexRender(
											cell.column.columnDef.cell,
											cell.getContext()
										) }
									</td>
								) ) }
							</tr>
						) ) }
					</tbody>
				</table>
			) }
			{ ! hasRows && <p>no results</p> }
		</>
	);
}

export default forwardRef( DataTableRows );
