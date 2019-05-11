import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import theme from '../../config/theme';

const { buttons, colorScheme, sizes } = theme;

export interface HomeSchema {
    addNewContainer: ViewStyle;
    addNewText: TextStyle;
    peopleContainer: ViewStyle;
    personContainer: ViewStyle;
    rootContainer: ViewStyle;
}

export default StyleSheet.create({
    addNewContainer: {
        flex: 1,
    },
    addNewText: {
        color: colorScheme.links,
    },
    peopleContainer: {
        marginTop: 30,
        marginBottom: 50,
    },
    personContainer: {
        marginVertical: 20,
    },
    rootContainer: {
        backgroundColor: colorScheme.backgroundColor,
        flex: 1,
        paddingHorizontal: 20,
    },
});
