import {  combineReducers } from 'redux';
import {cartReducer} from './redux/reducers/cartReducer';
import  { alertReducer } from './redux/reducers/alertReducer';

const rootReducer = combineReducers({
    cartReducer,
    alertReducer
});

export default rootReducer;