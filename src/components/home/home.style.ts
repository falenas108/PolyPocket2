import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import theme from '../../config/theme';

const { buttons, colorScheme, sizes } = theme;

export interface HomeSchema {
    primaryButton: ViewStyle;
    text: TextStyle;
}

export default StyleSheet.create({
    primaryButton: {
        ...buttons.buttonShape,
        alignItems: 'center',
        backgroundColor: colorScheme.links,
        justifyContent: 'center',
    },
    text: {
        color: '#FFF',
    },
});
