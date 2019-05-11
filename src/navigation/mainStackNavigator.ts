import { createStackNavigator } from 'react-navigation';
import { Home } from '../components/home';
import { PersonForm } from '../components/PersonForm';
import theme from '../config/theme';

export default createStackNavigator(
    {
        Home,
        PersonForm,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: theme.colorScheme.backgroundColor,
            },
        },
    }
);
