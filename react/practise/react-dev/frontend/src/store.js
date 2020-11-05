import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';

const initialState = {};

const reducer = combineReducers({
    productList: productListReducer
});

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  reducer,
  initialState,
  enhancers
);
export default store;