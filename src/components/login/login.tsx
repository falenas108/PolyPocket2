import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { loginStyles } from '.';

export default class Login extends React.Component {
    styles = loginStyles;

    public Title = (): JSX.Element => {
        return (
            <View style={this.styles.logoContainer}>
                <Text style={this.styles.logoText}>PolyPocket</Text>
            </View>
        );
    };

    public Login = (): JSX.Element => {
        return <
    }

    render() {
        return (
            <SafeAreaView style={this.styles.rootContainer}>
                <this.Title />
            </SafeAreaView>
        );
    }
}
