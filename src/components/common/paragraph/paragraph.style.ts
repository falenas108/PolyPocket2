import theme from '../../../config/theme';
import { StyleSheet, TextStyle } from 'react-native';

const { colorScheme, fontFamilies, sizes } = theme;

export interface ParagraphStyleSchema {
    paragraph: TextStyle;
}

export default StyleSheet.create({
    paragraph: {
        color: colorScheme.paragraphTextColor,
        fontFamily: fontFamilies.paragraph,
        fontSize: sizes.paragraph,
    },
});
