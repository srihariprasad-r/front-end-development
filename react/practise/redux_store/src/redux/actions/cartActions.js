const totalPay = (items) => {
    let payment = 0;
    for (let i = 0; i < items.length; i++) {
        payment += items[i].price;
    };
    return payment;
};


export const addToCartItemAction = (item, cart) => {
    const newcart = [...cart, item];
    const totalpayment = totalPay(newcart);
    return {
        type: 'ADD_TO_CART',
        payload: {newcart, totalpayment}
    };
};


export const removeFromCartItemAction = (item) => {
    const totalpayment = totalPay(item);
    return {
        type: 'REMOVE_FROM_CART',
        payload: {item,totalpayment}
    };
};