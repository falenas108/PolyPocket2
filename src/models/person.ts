import { AsyncStorage } from 'react-native';

export default class Person {
    id: number = -1;
    isFavorite?: boolean = false;
    name: string = '';

    constructor(person: Partial<Person>) {
        const setIdAndAssign = async (person: Partial<Person>) => {
            let maxId: string =
                (await AsyncStorage.getItem('maxPersonId')) || '';

            if (!maxId) {
                AsyncStorage.setItem('maxPersonId', '0');
                person.id = 0;
            } else {
                person.id = Number(maxId) + 1;
            }
            Object.assign(this, person);
        };

        if (person.id === -1) {
            setIdAndAssign(person);
        } else {
            Object.assign(this, person);
        }
    }
}
