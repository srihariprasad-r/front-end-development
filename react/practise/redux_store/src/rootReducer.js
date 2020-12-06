import {  combineReducers } from 'redux';
import {cartReducer} from './redux/reducers/cartReducer';

const rootReducer = combineReducers({
    cartReducer
});

export default rootReducer;