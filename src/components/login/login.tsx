import React from 'react';
import { LoginView } from '.';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<any>;
}

export default class Login extends React.Component<Props> {
    render() {
        return <LoginView onPressLogin={this.onPressLogin} />;
    }

    onPressLogin = () => {
        this.props.navigation.navigate('Home');
    };
}
