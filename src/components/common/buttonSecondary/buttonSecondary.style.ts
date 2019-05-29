import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import theme from '../../../config/theme';

const { buttons, colorScheme } = theme;

export interface SecondaryButtonSchema {
    secondaryButton: ViewStyle;
    text: TextStyle;
}

export default StyleSheet.create({
    secondaryButton: {
        ...buttons.buttonShape,
        alignItems: 'center',
        backgroundColor: colorScheme.linksAlternate,
        justifyContent: 'center',
    },
    text: {
        color: '#FFF',
    },
});
