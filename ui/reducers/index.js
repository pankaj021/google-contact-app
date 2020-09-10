import { combineReducers } from 'redux';
import userReducer from './userReducer';
import contactReducer from './contactReducer';
import loaderReducer from './loaderReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    user: userReducer,
    contacts: contactReducer,
    loader: loaderReducer,
    error: errorReducer
})