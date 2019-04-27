import { createStackNavigator } from 'react-navigation';
import Home from '../components/home/home';

export default createStackNavigator(
    {
        Home,
    },
    {
        defaultNavigationOptions: {
            header: null,
        },
    }
);
