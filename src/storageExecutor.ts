import { Person } from './models';
import AsyncStorage from '@react-native-community/async-storage';

export default class StoreExecutor {
    protected static maxId: number = 0;

    protected static getMaxId = async (): Promise<number> => {
        if (!StoreExecutor.maxId) {
            (await StoreExecutor.getPeople()).forEach(person => {
                if (person.id >= StoreExecutor.maxId || -1) {
                    StoreExecutor.maxId = person.id + 1;
                }
            });
        }
        return StoreExecutor.maxId;
    };

    public static addPerson = async (newPerson: Person): Promise<void> => {
        newPerson = { ...newPerson, id: await StoreExecutor.getMaxId() };
        StoreExecutor.maxId++;
        const people: Person[] = JSON.parse(
            (await AsyncStorage.getItem('people')) || '[]'
        ) as Person[];
        people.push(newPerson as Person);
        return AsyncStorage.setItem('people', JSON.stringify(people));
    };

    public static deletePerson = async (
        deletedPerson: Person
    ): Promise<void> => {
        const updatedPeople = (await StoreExecutor.getPeople()).filter(
            person => person.id !== deletedPerson.id
        );
        return AsyncStorage.setItem('people', JSON.stringify(updatedPeople));
    };

    public static getPeople = async (): Promise<Person[]> => {
        const people = JSON.parse(
            (await AsyncStorage.getItem('people')) || '[]'
        ) as Person[];
        return people;
    };

    public static updatePerson = async (
        changedPerson: Person
    ): Promise<void> => {
        const mergedPeople = (await StoreExecutor.getPeople()).map(person =>
            person.id === changedPerson.id ? changedPerson : person
        );

        return AsyncStorage.setItem('people', JSON.stringify(mergedPeople));
    };
}
