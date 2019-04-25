import theme from '../../config/theme';
import { StyleSheet } from 'react-native';

const { colorScheme, fontFamilies, sizes } = theme;

export default StyleSheet.create({
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    formField: {
        marginVertical: 10,
    },
    formFieldLabel: {
        alignSelf: 'center',
        color: colorScheme.paragraphTextColor,
    },
    logoContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    logoText: {
        color: colorScheme.paragraphTextColor,
        letterSpacing: 1.5,
        fontFamily: fontFamilies.logo,
        fontSize: sizes.logo,
    },
    rootContainer: {
        backgroundColor: colorScheme.backgroundColor,
        flex: 1,
    },
});
