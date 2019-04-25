import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { loginStyles } from '.';
import { FormInput } from '../common';

export default class Login extends React.Component {
    styles = loginStyles;

    public Title = (): JSX.Element => {
        return (
            <View style={this.styles.logoContainer}>
                <Text style={this.styles.logoText}>PolyPocket</Text>
            </View>
        );
    };

    public LoginForm = (): JSX.Element => {
        return (
            <View style={this.styles.formContainer}>
                <FormInput
                    containerStyle={this.styles.formField}
                    label={'Username'}
                    labelStyle={this.styles.formFieldLabel}
                />
                <FormInput
                    containerStyle={this.styles.formField}
                    label={'Password'}
                    labelStyle={this.styles.formFieldLabel}
                />
            </View>
        );
    };

    render() {
        return (
            <SafeAreaView style={this.styles.rootContainer}>
                <this.Title />
                <this.LoginForm />
            </SafeAreaView>
        );
    }
}
