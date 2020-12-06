export const addToCartItemAction = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    };
};


export const removeFromCartItemAction = (item) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    };
};