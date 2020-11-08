const redux = require('redux');
const reduxLogger = require('redux-logger');

const applymiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const createstore = redux.createStore;
const combinereducer = redux.combineReducers;

/** Action */
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First action'        
    }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "First action",
  };
}

/** Reducer 
 * (prevState, action) => newState
*/

/**
const initialState = {
    numOfCakes : 10,
    numOfIcecream : 20
}
*/

const initialCake = {
  numOfCakes: 10
};

const initialIcecream = {
  numOfIcecream: 20,
};


const Cakereducer = (state= initialCake, action) => {
    switch (action.type) {
      case "BUY_CAKE":
        return {
          ...state,
          numOfCakes: state.numOfCakes - 1,
        };
      default:
        return state;
    }
}

const Icecreamreducer = (state = initialIcecream, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};

/** Store */
const reducer = combinereducer({
    Cake: Cakereducer,
    Icecream: Icecreamreducer
});
const store = createstore(reducer, applymiddleware(logger));
console.log('Initial State', store.getState());     //fetch currentState
const unsubscribe = store.subscribe(() => {});  //subscribers to get notified upon change
store.dispatch(buyCake()); //dispatch an action
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());      //new dispatch action created for Icecream
unsubscribe();

