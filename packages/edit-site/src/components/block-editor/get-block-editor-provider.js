/**
 * Internal dependencies
 */
import DefaultBlockEditor from './providers/default-block-editor-provider';
import NavigationBlockEditor from './providers/navigation-block-editor-provider';
import {
	TEMPLATE_POST_TYPE,
	NAVIGATION_POST_TYPE,
	TEMPLATE_PART_POST_TYPE,
} from '../../utils/constants';
/**
 * Factory to isolate choosing the appropriate block editor
 * component to handle a given entity type.
 *
 * @param {string} entityType the entity type being edited
 * @return {JSX.Element} the block editor component to use.
 */
export default function getBlockEditorProvider( entityType ) {
	let Provider = null;

	switch ( entityType ) {
		case NAVIGATION_POST_TYPE:
			Provider = NavigationBlockEditor;
			break;
		case TEMPLATE_POST_TYPE:
		case TEMPLATE_PART_POST_TYPE:
		default:
			Provider = DefaultBlockEditor;
			break;
	}

	return Provider;
}
