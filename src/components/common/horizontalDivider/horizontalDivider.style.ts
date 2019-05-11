import { StyleSheet, ViewStyle } from 'react-native';
import theme from '../../../config/theme';
import h2Style from '../H2/H2.style';

const { colorScheme } = theme;

export interface HorizontalDividerStyleSchema {
    horizontalDivider: ViewStyle;
}

export default StyleSheet.create({
    horizontalDivider: {
        borderBottomWidth: 1,
        borderColor: colorScheme.borders.divider,
        width: '100%',
    },
});
