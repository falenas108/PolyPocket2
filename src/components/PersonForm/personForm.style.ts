import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import theme from '../../config/theme';
import H2Style from '../common/H2/H2.style';

const { buttons, colorScheme, sizes } = theme;

export interface PersonFormSchema {
    formContainer: ViewStyle;
    formFieldLabel: TextStyle;
    rootContainer: ViewStyle;
}

export default StyleSheet.create({
    formContainer: {
        paddingVertical: 40,
    },
    formFieldLabel: {
        ...H2Style.h2,
    },
    rootContainer: {
        backgroundColor: colorScheme.backgroundColor,
        flex: 1,
        paddingHorizontal: 20,
    },
});
