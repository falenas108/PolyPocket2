import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { loginStyles } from '.';
import { ButtonPrimary } from '../common';
import { Formik } from 'formik';
import { handleTextInput } from 'react-native-formik';
import { Input } from 'react-native-elements';

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

    public LoginFormView = (): JSX.Element => {
        const FormikInput = handleTextInput(Input);

        return (
            <View style={this.styles.formContainer}>
                <FormikInput
                    label="Username"
                    labelStyle={this.styles.formFieldLabel}
                    name="Username"
                    type="text"
                />
                <FormikInput
                    label="Password"
                    labelStyle={this.styles.formFieldLabel}
                    name="Password"
                    type="password"
                />
            </View>
        );
    };

    public LoginForm = (): JSX.Element => {
        return (
            <Formik
                initialValues={{ Username: '', Password: '' }}
                onSubmit={this.props.onPressLogin}>
                {() => (
                    <View style={{ flex: 1 }}>
                        <this.LoginFormView />
                    </View>
                )}
            </Formik>
        );
    };

    public LoginButton = (): JSX.Element => {
        return (
            <View style={this.styles.loginButton}>
                <ButtonPrimary onPress={this.props.onPressLogin}>
                    Login
                </ButtonPrimary>
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
