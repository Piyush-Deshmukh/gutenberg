/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { privateApis as patternPrivateApis } from '@wordpress/patterns';

/**
 * Internal dependencies
 */
import { unlock } from '../lock-unlock';

// Navigation
export const NAVIGATION_POST_TYPE = 'wp_navigation';

// Templates.
export const TEMPLATE_POST_TYPE = 'wp_template';
export const TEMPLATE_PART_POST_TYPE = 'wp_template_part';
export const TEMPLATE_CUSTOM_SOURCE = 'custom';

// Patterns.
export const {
	PATTERN_TYPES,
	PATTERN_DEFAULT_CATEGORY,
	PATTERN_CORE_SOURCES,
	PATTERN_SYNC_TYPES,
} = unlock( patternPrivateApis );

// Entities that are editable in focus mode.
export const FOCUSABLE_ENTITIES = [
	TEMPLATE_PART_POST_TYPE,
	NAVIGATION_POST_TYPE,
	PATTERN_TYPES.user,
];

export const POST_TYPE_LABELS = {
	[ TEMPLATE_POST_TYPE ]: __( 'Template' ),
	[ TEMPLATE_PART_POST_TYPE ]: __( 'Template Part' ),
	[ PATTERN_TYPES.user ]: __( 'Pattern' ),
	[ NAVIGATION_POST_TYPE ]: __( 'Navigation' ),
};
