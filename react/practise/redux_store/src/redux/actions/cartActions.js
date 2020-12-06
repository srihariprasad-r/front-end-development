export const addToCartItemAction = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    };
};


export const removeFromCartItemAction = (element, item) => {
    let hardcopy = [...item];
    hardcopy = hardcopy.filter(e=> e.id !== element.id);

    return {
        type: 'REMOVE_FROM_CART',
        payload: hardcopy
    };
};