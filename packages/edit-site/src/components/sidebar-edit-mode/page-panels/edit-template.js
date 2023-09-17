/**
 * WordPress dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { decodeEntities } from '@wordpress/html-entities';
import {
	DropdownMenu,
	MenuGroup,
	MenuItem,
	__experimentalHStack as HStack,
	__experimentalText as Text,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { store as coreStore } from '@wordpress/core-data';
import { check } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { store as editSiteStore } from '../../../store';
import SwapTemplateButton from './swap-template-button';
import ResetDefaultTemplate from './reset-default-template';

const POPOVER_PROPS = {
	className: 'edit-site-page-panels-edit-template__dropdown',
	placement: 'bottom-start',
};

export default function EditTemplate() {
	const { hasResolved, template, pageContentFocusType } = useSelect(
		( select ) => {
			const {
				getEditedPostContext,
				getEditedPostType,
				getEditedPostId,
				getPageContentFocusType,
			} = select( editSiteStore );
			const { getEditedEntityRecord, hasFinishedResolution } =
				select( coreStore );
			const _context = getEditedPostContext();
			const queryArgs = [
				'postType',
				getEditedPostType(),
				getEditedPostId(),
			];
			return {
				context: _context,
				hasResolved: hasFinishedResolution(
					'getEditedEntityRecord',
					queryArgs
				),
				template: getEditedEntityRecord( ...queryArgs ),
				pageContentFocusType: getPageContentFocusType(),
			};
		},
		[]
	);

	const { setHasPageContentFocus, setPageContentFocusType } =
		useDispatch( editSiteStore );

	if ( ! hasResolved ) {
		return null;
	}

	const isTemplateHidden = pageContentFocusType !== 'disableTemplate';

	return (
		<HStack className="edit-site-summary-field">
			<Text className="edit-site-summary-field__label">
				{ __( 'Template' ) }
			</Text>
			<DropdownMenu
				popoverProps={ POPOVER_PROPS }
				focusOnMount
				toggleProps={ {
					variant: 'tertiary',
					className: 'edit-site-summary-field__trigger',
				} }
				label={ __( 'Template options' ) }
				text={ decodeEntities( template.title ) }
				icon={ null }
			>
				{ ( { onClose } ) => (
					<>
						<MenuGroup>
							<MenuItem
								onClick={ () => {
									setHasPageContentFocus( false );
									onClose();
								} }
							>
								{ __( 'Edit template' ) }
							</MenuItem>
							<SwapTemplateButton onClick={ onClose } />
						</MenuGroup>
						<ResetDefaultTemplate onClick={ onClose } />
						<MenuGroup>
							<MenuItem
								icon={ ! isTemplateHidden ? check : undefined }
								onClick={ () => {
									setPageContentFocusType(
										isTemplateHidden
											? 'disableTemplate'
											: 'hideTemplate'
									);
								} }
							>
								{ __( 'Template preview' ) }
							</MenuItem>
						</MenuGroup>
					</>
				) }
			</DropdownMenu>
		</HStack>
	);
}
