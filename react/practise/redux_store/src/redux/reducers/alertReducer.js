const INITIAL_STATE = {
    alert: ""
}

export const alertReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_ALERT':
            return {
                ...state, 
                alert: action.payload
            }
        default:
            return state
    };
};