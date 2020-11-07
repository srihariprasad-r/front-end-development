const redux = require('redux');
const createstore = redux.createStore;

/** Action */
const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First action'        
    }
}

/** Reducer 
 * (prevState, action) => newState
*/
const initialState = {
    numOfCakes : 10
}

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case 'BUY_CAKE':
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}

/** Store */

const store = createstore(reducer);
console.log('Initial State', store.getState());     //fetch currentState
const unsubscribe = store.subscribe(() => console.log('State change', store.getState()));  //subscribers to get notified upon change
store.dispatch(buyCake()); //dispatch an action
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();

