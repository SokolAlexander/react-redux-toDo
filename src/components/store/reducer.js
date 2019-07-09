import { combineReducers } from 'redux';
import formAddReducer from './formAdd/reducers';
import formFilterReducer from './formFilter/reducers';
import listReducer from './list/reducers';

export default combineReducers({
    formAdd: formAddReducer,
    formFilter: formFilterReducer,
    list: listReducer
})