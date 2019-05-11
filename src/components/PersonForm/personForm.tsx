import React, { useState } from 'react';
import PersonFormView from './personForm.view';
import { NavigationScreenProp } from 'react-navigation';
import { Person } from '../../models';

interface Props {
    navigation: NavigationScreenProp<any>;
}

export default function PersonForm(props: Props) {
    const [person, setPerson] = useState(
        props.navigation.getParam('selectedPerson') || new Person({})
    );

    const onPressSave = () => {
        // TODO: Handle save
        props.navigation.pop();
    };

    return <PersonFormView onPressSave={onPressSave} person={person} />;
}
