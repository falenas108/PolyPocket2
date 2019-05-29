import React, { useState, useEffect } from 'react';
import HomeView from './home.view';
import {
    NavigationScreenProp,
    NavigationRoute,
    withNavigationFocus,
} from 'react-navigation';
import { Person } from '../../models';
import StoreExecutor from '../../storageExecutor';

interface Props {
    navigation: NavigationScreenProp<NavigationRoute<any>>;
}

export default function Home(props: Props) {
    const [people, setPeople] = useState<Person[]>([]);
    const [peopleDirty, setPeopleDirty] = useState<boolean>(true);

    const getPeople = async (): Promise<void> => {
        if (peopleDirty) {
            setPeople(await StoreExecutor.getPeople());
            setPeopleDirty(false);
        }
    };

    const onPressAdd = () => {
        setPeopleDirty(true);
        props.navigation.navigate('PersonForm');
    };

    const onPressEdit = (person: Person) => {
        setPeopleDirty(true);
        props.navigation.navigate('PersonForm', {
            selectedPerson: person,
        });
    };

    const didFocusSubscription = props.navigation.addListener('didFocus', () =>
        getPeople()
    );

    useEffect(() => {
        didFocusSubscription;
        return () => {
            didFocusSubscription.remove();
        };
    });

    return (
        <HomeView
            onPressAdd={onPressAdd}
            onPressEdit={onPressEdit}
            people={people}
        />
    );
}
