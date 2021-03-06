import { StyleSheet, ViewStyle } from 'react-native';
import theme from '../../../config/theme';
import h2Style from '../H2/H2.style';

const { colorScheme } = theme;

export interface FormInputStyleSchema {
    formField: ViewStyle;
    formLabel: ViewStyle;
}

export default StyleSheet.create({
    formField: {
        backgroundColor: colorScheme.forms.backgroundColor,
        borderRadius: 10,
        height: 50,
        width: 100,
    },
    formLabel: {
        ...h2Style.h2,
        marginBottom: 5,
    },
});
