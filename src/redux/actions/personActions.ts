import { Person } from '../../models';
import { ReduxActions } from './actions';

export const AddPerson = (person: Person) => {
    return { type: ReduxActions.AddPerson, payload: person };
};
