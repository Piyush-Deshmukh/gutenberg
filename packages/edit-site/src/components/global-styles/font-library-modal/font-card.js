/**
 * WordPress dependencies
 */
import { _n } from '@wordpress/i18n';
import {
	__experimentalText as Text,
	Button,
	Flex,
	FlexItem,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import FontDemo from './font-demo';
import { getPreviewStyle } from './utils';

function FontCard( { font, onClick, actionHandler, variantsText } ) {
	const fakeFontFace = {
		fontStyle: 'normal',
		fontWeight: '400',
		fontFamily: font.fontFamily,
		fake: true,
	};

	const displayFontFace =
		font.fontFace && font.fontFace.length
			? font?.fontFace?.find(
					( face ) =>
						face.fontStyle === 'normal' && face.fontWeight === '400'
			  ) || font.fontFace[ 0 ]
			: fakeFontFace;

	const demoStyle = getPreviewStyle( font );

	const variantsCount = font.fontFace?.length || 1;

	const style = {
		cursor: !! onClick ? 'pointer' : 'default',
	};

	return (
		<Button
			onClick={ onClick }
			style={ style }
			className="font-library-modal__font-card"
		>
			<Flex justify="space-between" wrap={ false }>
				<FontDemo
					fontFace={ displayFontFace }
					text={ font.name }
					style={ demoStyle }
				/>
				<Flex justify="flex-end">
					<FlexItem>
						<Text className="font-library-modal__font-card__count">
							{ variantsText ||
								variantsCount +
									' ' +
									_n( 'variant', 'variants', variantsCount ) }
						</Text>
					</FlexItem>
					<FlexItem>{ !! actionHandler && actionHandler }</FlexItem>
				</Flex>
			</Flex>
		</Button>
	);
}

export default FontCard;
