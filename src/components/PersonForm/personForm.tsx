import React, { useState } from 'react';
import PersonFormView from './personForm.view';
import { NavigationScreenProp } from 'react-navigation';
import { Person } from '../../models';

interface Props {
    navigation: NavigationScreenProp<any>;
}

export default function PersonForm(props: Props) {
    const [person, setPerson] = useState<Person>(
        props.navigation.getParam('selectedPerson') || new Person({})
    );

    const onPressSave = ({ name }: { name: string }) => {
        console.log(name);
        props.navigation.pop();
    };

    return <PersonFormView onPressSave={onPressSave} person={person} />;
}
