import React, { useState } from 'react';
import merge from '../../utils/merge';
import { TouchableOpacityProps, ScrollView, View } from 'react-native';
import personFormStyles, { PersonFormSchema } from './personForm.style';
import { Formik } from 'formik';
import { Person } from '../../models';
import { Input } from 'react-native-elements';
import { handleTextInput } from 'react-native-formik';
import { ButtonPrimary, ButtonSecondary } from '../common';

interface Props extends TouchableOpacityProps {
    children?: JSX.Element | JSX.Element[] | string;
    onPressDelete: (person: Person) => void;
    onPressSave: (person: Person) => void;
    person: Person;
    styles?: Partial<PersonFormSchema>;
}

export default function PersonForm(props: Props) {
    const styles: PersonFormSchema = merge(personFormStyles, props.styles);

    const FormItem = () => {
        return (
            <Formik
                initialValues={{ id: props.person.id, name: props.person.name }}
                onSubmit={props.onPressSave}>
                {formikProps => (
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <FormItemContents />
                        <ButtonPrimary onPress={formikProps.handleSubmit}>
                            Save
                        </ButtonPrimary>
                        <ButtonSecondary
                            onPress={() =>
                                props.onPressDelete(formikProps.values)
                            }>
                            Delete
                        </ButtonSecondary>
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
