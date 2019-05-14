/**
 * @format
 */
import React from 'react';
import { AppRegistry, YellowBox } from 'react-native';

import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store/configureStore';

YellowBox.ignoreWarnings([
    'Warning: Slider',
    'Warning: ViewPagerAndroid has been extracted',
]);

AppRegistry.registerComponent(appName, () => App);
