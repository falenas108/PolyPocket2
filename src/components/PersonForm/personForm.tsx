import React, { useState } from 'react';
import PersonFormView from './personForm.view';
import { NavigationScreenProp } from 'react-navigation';
import { Person } from '../../models';
import StoreExecutor from '../../storageExecutor';

interface Props {
    navigation: NavigationScreenProp<any>;
}

export default function PersonForm(props: Props) {
    const [person, setPerson] = useState<Person>(
        props.navigation.getParam('selectedPerson') || new Person()
    );

    const onPressDelete = async (person: Person) => {
        await (person.id > -1 ? StoreExecutor.deletePerson(person) : null);
        props.navigation.pop();
    };

    const onPressSave = async (person: Person) => {
        await (person.id > -1
            ? StoreExecutor.updatePerson(person)
            : StoreExecutor.addPerson(person));
        props.navigation.pop();
    };

    return (
        <PersonFormView
            onPressDelete={onPressDelete}
            onPressSave={onPressSave}
            person={person}
        />
    );
}
