import AppStore from '../../models/appStore';
import { createStore, Store } from 'redux';
import rootReducer from '../reducers/rootReducer';

export default (): Store<AppStore> => {
    return createStore(rootReducer);
};
