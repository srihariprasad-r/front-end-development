const INITIAL_STATE = {
    cart: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state, 
                cart: [...state.cart, action.payload]
            }
        default:
            return state
    };
};