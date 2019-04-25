import theme from '../../../config/theme';
import { StyleSheet, TextStyle } from 'react-native';

const { colorScheme, fontFamilies, sizes } = theme;

export interface H2StyleSchema {
    h2: TextStyle;
}

export default StyleSheet.create({
    h2: {
        color: colorScheme.paragraphTextColor,
        fontFamily: fontFamilies.paragraph,
        fontSize: sizes.h2,
        fontWeight: '500',
    },
});
