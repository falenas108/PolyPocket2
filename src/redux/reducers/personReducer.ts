import { ReduxActions } from '../actions/actions';
import { initialState } from './initialState';
import AppStore from '../../models/AppStore';
import { AddPerson } from '../actions/personActions';

export function setPerson(
    state = initialState,
    action: ReturnType<typeof AddPerson>
): AppStore {
    switch (action.type) {
        case ReduxActions.AddPerson:
            return { ...state, people: [...state.people, action.payload] };
        default:
            return state;
    }
}
