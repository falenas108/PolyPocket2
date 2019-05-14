import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store/configureStore';

import AppNavigator from './src/navigation/appNavigator';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <AppNavigator />
            </Provider>
        );
    }
}
