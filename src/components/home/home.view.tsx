import React from 'react';
import merge from '../../utils/merge';
import {
    TouchableOpacityProps,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import homeStyles, { HomeSchema } from './home.style';
import { H2, HorizontalDivider, Paragraph } from '../common';
import { Person } from '../../models';
import { FlatList } from 'react-native-gesture-handler';

interface Props extends TouchableOpacityProps {
    children?: JSX.Element | JSX.Element[] | string;
    onPressAdd: () => void;
    onPressEdit: (person: Person) => void;
    people: Person[];
    styles?: Partial<HomeSchema>;
}

export default function HomeView(props: Props) {
    const styles: HomeSchema = merge(homeStyles, props.styles);

    const PersonList = () => {
        return (
            <FlatList
                contentContainerStyle={styles.peopleContainer}
                data={props.people}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={HorizontalDivider}
                renderItem={PersonItem}
            />
        );
    };

    const PersonItem = ({ item }: { item: Person }) => {
        return (
            <TouchableOpacity
                onPress={() => props.onPressEdit(item)}
                style={styles.personContainer}>
                <H2>{item.name}</H2>
            </TouchableOpacity>
        );
    };

    const AddNewPerson = () => {
        return (
            <TouchableOpacity
                onPress={props.onPressAdd}
                style={styles.addNewContainer}>
                <Paragraph style={styles.addNewText}>Add new</Paragraph>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.rootContainer}>
            <PersonList />
            <AddNewPerson />
        </ScrollView>
    );
}
