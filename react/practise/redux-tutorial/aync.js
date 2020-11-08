const redux = require("redux");

const createstore = redux.createStore;

const initialState = {
    loading: false,
    users : [],
    error: ''
};

/** Action */
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

function fetchUserRequest() {
    return {
      type: FETCH_USER_REQUEST
    };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload : users
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}

/** Reducer 
 * (prevState, action) => newState
*/

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST: 
            return {
                loading: true
            }
        case FETCH_USERS_SUCCESS: 
            return {
                loading: false,
                users: action.payload,
                error : ''
            }        
        case FETCH_USERS_SUCCESS: 
            return {
                loading: false,
                users: [],
                error: action.payload
            }        
        default:
            return state
    }
};

const store = createstore(reducer);