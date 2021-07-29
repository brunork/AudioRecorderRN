import {createStore} from 'redux';
import recordReducer from './RecordReducer';

const store = createStore(recordReducer)

export default store;