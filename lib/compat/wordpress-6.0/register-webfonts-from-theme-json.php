<?php
/**
 * Bootstraps Global Styles.
 *
 * @package gutenberg
 */

/**
 * Register webfonts defined in theme.json.
 */
function gutenberg_register_webfonts_from_theme_json() {
	// Get settings from theme.json.
	$theme_settings = WP_Theme_JSON_Resolver_Gutenberg::get_theme_data()->get_settings();

	// Bail out early if there are no settings for webfonts.
	if ( empty( $theme_settings['typography'] ) || empty( $theme_settings['typography']['fontFamilies'] ) ) {
		return;
	}

	$webfonts = array();

	// Look for fontFamilies.
	foreach ( $theme_settings['typography']['fontFamilies'] as $font_families ) {
		foreach ( $font_families as $font_family ) {

			// Skip if fontFace is not defined.
			if ( empty( $font_family['fontFace'] ) ) {
				continue;
			}

			$font_family['fontFace'] = (array) $font_family['fontFace'];

			foreach ( $font_family['fontFace'] as $font_face ) {
				if ( isset( $font_face['origin'] ) && 'gutenberg_wp_webfonts_api' === $font_face['origin'] ) {
					// This webfont was already registered programmatically through the Webfonts API.
					continue;
				}

				// Convert keys to kebab-case.
				foreach ( $font_face as $property => $value ) {
					$kebab_case               = _wp_to_kebab_case( $property );
					$font_face[ $kebab_case ] = $value;
					if ( $kebab_case !== $property ) {
						unset( $font_face[ $property ] );
					}
				}

				$webfonts[] = $font_face;
			}
		}
	}
	foreach ( $webfonts as $webfont ) {
		wp_webfonts()->register_font( $webfont );
	}
}

/**
 * Add missing fonts data to the global styles.
 *
 * @param array $data The global styles.
 *
 * @return array The global styles with missing fonts data.
 */
function gutenberg_add_registered_webfonts_to_theme_json( $data ) {
	$font_families_registered = wp_webfonts()->get_all_webfonts();
	$font_families_from_theme = array();
	if ( ! empty( $data['settings'] ) && ! empty( $data['settings']['typography'] ) && ! empty( $data['settings']['typography']['fontFamilies'] ) ) {
		$font_families_from_theme = $data['settings']['typography']['fontFamilies'];
	}

	/**
	 * Helper to get an array of the font-families.
	 *
	 * @param array $families_data The font-families data.
	 *
	 * @return array The font-families array.
	 */
	$get_families = function( $families_data ) {
		$families = array();
		foreach ( $families_data as $family ) {
			$families[] = WP_Webfonts::get_font_slug( $family );
		}

		// Micro-optimization: Use array_flip( array_flip( $array ) )
		// instead of array_unique( $array ) because it's faster.
		// The result is the same.
		return array_flip( array_flip( $families ) );
	};

	// Diff the arrays to find the missing fonts.
	$to_add = array_diff(
		array_keys( $font_families_registered ),
		$get_families( $font_families_from_theme )
	);

	// Bail out early if there are no missing fonts.
	if ( empty( $to_add ) ) {
		return $data;
	}

	// Make sure the path to settings.typography.fontFamilies.theme exists
	// before adding missing fonts.
	if ( empty( $data['settings'] ) ) {
		$data['settings'] = array();
	}
	if ( empty( $data['settings']['typography'] ) ) {
		$data['settings']['typography'] = array();
	}
	if ( empty( $data['settings']['typography']['fontFamilies'] ) ) {
		$data['settings']['typography']['fontFamilies'] = array();
	}

	foreach ( $to_add as $slug ) {
		$font_faces_for_family = $font_families_registered[ $slug ];
		$family_name           = $font_faces_for_family[0]['font-family'];
		$font_faces            = array();

		foreach ( $font_faces_for_family as $font_face ) {
			$camel_cased = array( 'origin' => 'gutenberg_wp_webfonts_api' );
			foreach ( $font_face as $key => $value ) {
				$camel_cased[ lcfirst( str_replace( '-', '', ucwords( $key, '-' ) ) ) ] = $value;
			}
			$font_faces[] = $camel_cased;
		}

		$data['settings']['typography']['fontFamilies'][] = array(
			'fontFamily' => false !== strpos( $family_name, ' ' ) ? "'{$family_name}'" : $family_name,
			'name'       => $family_name,
			'slug'       => $slug,
			'fontFace'   => $font_faces,
		);
	}

	return $data;
}

add_action( 'wp_loaded', 'gutenberg_register_webfonts_from_theme_json' );
