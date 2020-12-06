const INITIAL_STATE = {
    cart: [],
    cartTotal: 0
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state, 
                cart: action.payload.newcart,
                cartTotal: action.payload.totalpayment
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state, 
                cart: action.payload.item,
                cartTotal: action.payload.totalpayment
            }
        default:
            return state
    };
};