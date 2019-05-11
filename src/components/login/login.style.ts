import theme from '../../config/theme';
import { StyleSheet } from 'react-native';

const { colorScheme, fontFamilies, sizes } = theme;

export default StyleSheet.create({
    formContainer: {
        flex: 1,
        marginVertical: 20,
    },
    formField: {
        marginVertical: 10,
    },
    formFieldLabel: {
        color: colorScheme.paragraphTextColor,
        marginStart: 5,
        marginTop: 30,
    },
    loginButton: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginTop: 50,
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
        justifyContent: 'space-around',
    },
});
