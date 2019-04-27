import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { loginStyles } from '.';
import { FormInput, PrimaryButton } from '../common';

interface Props {
    onPressLogin: () => void;
}

export default class Login extends React.Component<Props> {
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
                    label={'Username'}
                    styles={{
                        formLabel: this.styles.formFieldLabel,
                        formField: this.styles.formField,
                    }}
                />
                <FormInput
                    label={'Password'}
                    styles={{
                        formLabel: this.styles.formFieldLabel,
                        formField: this.styles.formField,
                    }}
                />
            </View>
        );
    };

    public LoginButton = (): JSX.Element => {
        return (
            <View style={this.styles.loginButton}>
                <PrimaryButton onPress={this.props.onPressLogin}>
                    Login
                </PrimaryButton>
            </View>
        );
    };

    render() {
        return (
            <SafeAreaView style={this.styles.rootContainer}>
                <this.Title />
                <this.LoginForm />
                <this.LoginButton />
            </SafeAreaView>
        );
    }
}
