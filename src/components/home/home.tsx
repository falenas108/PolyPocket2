import React from 'react';
import HomeView from './home.view';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Person } from '../../models';

interface Props {
    navigation: NavigationScreenProp<NavigationRoute<any>>;
}

export default function Home(props: Props) {
    const onPressAdd = () => {
        props.navigation.navigate('PersonForm');
    };

    const onPressEdit = (person: Person) => {
        props.navigation.navigate('PersonForm', {
            selectedPerson: person,
        });
    };

    console.log(props);

    return <HomeView onPressAdd={onPressAdd} onPressEdit={onPressEdit} />;
}
