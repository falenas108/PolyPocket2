import { createAppContainer, createStackNavigator } from 'react-navigation';
import AuthNavigator from './authNavigator';
import MainStackNavigator from './mainStackNavigator';

const AppNavigator = createStackNavigator(
    {
        AuthNavigator,
        MainStackNavigator,
    },
    {
        defaultNavigationOptions: {
            header: null,
        },
    }
);

export default createAppContainer(AppNavigator);
