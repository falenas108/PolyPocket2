import { createAppContainer, createStackNavigator } from 'react-navigation';
import AuthNavigator from './authNavigator';

const AppNavigator = createStackNavigator(
    {
        AuthNavigator,
    },
    {
        defaultNavigationOptions: {
            header: null,
        },
    }
);

export default createAppContainer(AppNavigator);
