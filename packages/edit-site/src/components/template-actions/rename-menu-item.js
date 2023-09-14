/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	Button,
	MenuItem,
	Modal,
	TextControl,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { store as coreStore } from '@wordpress/core-data';
import { store as noticesStore } from '@wordpress/notices';
import { decodeEntities } from '@wordpress/html-entities';

export default function RenameMenuItem( { postType, postId, onClose } ) {
	const record = useSelect(
		( select ) =>
			select( coreStore ).getEntityRecord( 'postType', postType, postId ),
		[ postType, postId ]
	);
	const [ editedTitle, setEditedTitle ] = useState( '' );
	const [ isModalOpen, setIsModalOpen ] = useState( false );

	const {
		editEntityRecord,
		__experimentalSaveSpecifiedEntityEdits: saveSpecifiedEntityEdits,
	} = useDispatch( coreStore );
	const { createSuccessNotice, createErrorNotice } =
		useDispatch( noticesStore );
	const isTemplate =
		record?.type === 'wp_template' || record?.type === 'wp_template_part';
	const isUserPattern = record?.type === 'wp_block';

	if ( isTemplate && ! record.is_custom && isUserPattern ) {
		return null;
	}

	async function onTemplateRename( event ) {
		event.preventDefault();

		try {
			await editEntityRecord( 'postType', record.type, record.id, {
				title: editedTitle,
			} );

			// Update state before saving rerenders the list.
			setEditedTitle( '' );
			setIsModalOpen( false );
			onClose();

			// Persist edited entity.
			await saveSpecifiedEntityEdits(
				'postType',
				postType,
				postId,
				[ 'title' ], // Only save title to avoid persisting other edits.
				{
					throwOnError: true,
				}
			);

			// @TODO Should account for patterns.
			createSuccessNotice(
				postType === 'wp_template'
					? __( 'Template renamed.' )
					: __( 'Template part renamed.' ),
				{
					type: 'snackbar',
					id: 'template-rename-success',
				}
			);
		} catch ( error ) {
			// @TODO Should account for patterns.
			const fallbackErrorMessage =
				postType === 'wp_template'
					? __( 'An error occurred while renaming the template.' )
					: __(
							'An error occurred while renaming the template part.'
					  );
			const errorMessage =
				error.message && error.code !== 'unknown_error'
					? error.message
					: fallbackErrorMessage;

			createErrorNotice( errorMessage, { type: 'snackbar' } );
		}
	}

	return (
		<>
			<MenuItem
				onClick={ () => {
					setIsModalOpen( true );
					setEditedTitle(
						decodeEntities(
							record?.title?.rendered || record?.title?.raw
						)
					);
				} }
			>
				{ __( 'Rename' ) }
			</MenuItem>
			{ isModalOpen && (
				<Modal
					title={ __( 'Rename' ) }
					onRequestClose={ () => {
						setIsModalOpen( false );
						onClose();
					} }
					overlayClassName="edit-site-list__rename-modal"
				>
					<form onSubmit={ onTemplateRename }>
						<VStack spacing="5">
							<TextControl
								__nextHasNoMarginBottom
								label={ __( 'Name' ) }
								value={ editedTitle }
								onChange={ setEditedTitle }
								required
							/>

							<HStack justify="right">
								<Button
									variant="tertiary"
									onClick={ () => {
										setIsModalOpen( false );
										onClose();
									} }
								>
									{ __( 'Cancel' ) }
								</Button>

								<Button variant="primary" type="submit">
									{ __( 'Save' ) }
								</Button>
							</HStack>
						</VStack>
					</form>
				</Modal>
			) }
		</>
	);
}
