import React from 'react';
import { LoginView } from '.';
import { NavigationScreenProp } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
    navigation: NavigationScreenProp<any>;
}

export default function Login(props: Props) {
    const onPressLogin = () => {
        props.navigation.navigate('Home');
    };

    return <LoginView onPressLogin={onPressLogin} />;
}
