/**
 * WordPress dependencies
 *
 */
/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';

export async function fetchInstallFonts( data ) {
	// If data is not FormData object, we need to pass it as the body of the request.
	// We are doing this because to upload local fonts we need to use FormData
	// To homogenize the request, we are using FormData for both cases (collection fonts and local fonts)

	let body = data;

	// If the data is not a FormData object, we need to create it
	// Data for collection fonts is an array of font families
	if ( ! ( data instanceof FormData ) ) {
		const formData = new FormData();
		formData.append( 'fontFamilies', JSON.stringify( data ) );
		body = formData;
	}

	const config = {
		path: '/wp/v2/fonts',
		method: 'POST',
		body,
	};

	return apiFetch( config );
}

export async function fetchUninstallFonts( fonts ) {
	const data = {
		fontFamilies: fonts,
	};
	const config = {
		path: '/wp/v2/fonts',
		method: 'DELETE',
		data,
	};
	return apiFetch( config );
}
