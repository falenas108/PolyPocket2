import { createStackNavigator } from 'react-navigation';
import Login from '../components/login/login';

export default createStackNavigator(
    {
        Login,
    },
    {
        defaultNavigationOptions: {
            header: null,
        },
    }
);
