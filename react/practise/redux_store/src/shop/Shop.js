import React, { useState , useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartItemAction, removeFromCartItemAction } from '../redux/actions/cartActions';

const Shop = () => {

    //const [cart, setCart] = useState([]);
    const [alert, setAlert] = useState("");
    const [total, setTotal] = useState(0);

    const { cart } = useSelector(state=> state.cartReducer);

    const dispatch = useDispatch();

    const items = [
        {
            id: 1,
            name: 'Xbox',
            price: 300
        },
        {
            id: 2,
            name: 'Playstation',
            price: 600
        },
        {
            id: 3,
            name: 'Brand X',
            price: 255
        }    
    ];

    useEffect(() => {
        totalPay()
    }, [cart]);

    const totalPay = () => {
            let payment = 0;
            for (let i = 0; i < cart.length; i++) {
                payment += cart[i].price;
            };
            setTotal(payment);
    };

    const addToCart = (el) => {
        let flag = true;
        for (let i=0; i < cart.length; i++){
            if (cart[i].id === el.id) {
                flag = false;
            }
        } 
        if (flag) {
            //setCart([...cart, el]);
            dispatch(addToCartItemAction(el));
            setAlert("");
        } else {
            setAlert(`${el.name} is already in the cart!`);
        }
    };

    const removeFromCart = (el) => {
        //let hardcopy = [...cart];
        //hardcopy = hardcopy.filter((cartitem) => cartitem.id !== el.id);
        //setCart(hardcopy);
        dispatch(removeFromCartItemAction(el, cart));
        setAlert("");
    };
    
    
    const listItems = items.map((el) => (
        <div key={el.id}>
            {`${el.name}: $${el.price}`}
            <span> <input type="submit" value="Add" onClick={() => addToCart(el)} /> </span>
        </div>
    ));

    const cartItems = cart.map((el) => (
        <div key={el.id}>
            {`${el.name}: $${el.price}`}
            <span> <input type="submit" value="Remove" onClick={() => removeFromCart(el)} /> </span>
        </div>
    ));

    return (
    <div>
        STORE
        <div>{listItems}</div>
        <div>Cart Items</div>
        <div>{cartItems}</div>
        <div>Total : ${total} </div>
        <div>Alert message: {alert}</div>
    </div>
    );
}

export default Shop;