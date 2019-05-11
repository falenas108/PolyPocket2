import React, { useState } from 'react';
import merge from '../../utils/merge';
import { TouchableOpacityProps, ScrollView, View } from 'react-native';
import personFormStyles, { PersonFormSchema } from './personForm.style';
import { Formik } from 'formik';
import { Person } from '../../models';
import { Input } from 'react-native-elements';
import { handleTextInput } from 'react-native-formik';

interface Props extends TouchableOpacityProps {
    children?: JSX.Element | JSX.Element[] | string;
    onPressSave: () => void;
    person: Person;
    styles?: Partial<PersonFormSchema>;
}

export default function PersonForm(props: Props) {
    const styles: PersonFormSchema = merge(personFormStyles, props.styles);

    const FormItem = () => {
        return (
            <Formik
                initialValues={{ name: props.person.name }}
                onSubmit={props.onPressSave}>
                {() => (
                    <View style={{ flex: 1 }}>
                        <FormItemContents />
                    </View>
                )}
            </Formik>
        );
    };

    const FormItemContents = () => {
        const FormikInput = handleTextInput(Input);

        return (
            <View style={styles.formContainer}>
                <FormikInput
                    label="Name"
                    labelStyle={styles.formFieldLabel}
                    name="name"
                    type="text"
                />
            </View>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.rootContainer}>
            <FormItem />
        </ScrollView>
    );
}
