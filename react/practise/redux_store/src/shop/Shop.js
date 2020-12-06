import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartItemAction, removeFromCartItemAction } from '../redux/actions/cartActions';
import { addAlert } from '../redux/actions/alertActions';

const Shop = () => {

    //const [cart, setCart] = useState([]);
    //const [alert, setAlert] = useState("");
    //const [total, setTotal] = useState(0);

    const { cart, cartTotal } = useSelector(state=> state.cartReducer);
    const { alert } = useSelector(state => state.alertReducer);

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

    // useEffect(() => {
    //     totalPay()
    // }, [cart]);

    const addToCart = (el) => {
        let flag = true;
        for (let i=0; i < cart.length; i++){
            if (cart[i].id === el.id) {
                flag = false;
            }
        } 
        if (flag) {
            //setCart([...cart, el]);
            dispatch(addToCartItemAction(el, cart));
            //setAlert("");
            dispatch(addAlert(""));
        } else {
            dispatch(addAlert(`${el.name} is already in the cart!`));
            //setAlert(`${el.name} is already in the cart!`);
        }
    };

    const removeFromCart = (el) => {
        let hardcopy = [...cart];
        hardcopy = hardcopy.filter((cartitem) => cartitem.id !== el.id);
        //setCart(hardcopy);
        dispatch(removeFromCartItemAction(hardcopy));
        //setAlert("");
        dispatch(addAlert(""));
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
        <div>Total : ${cartTotal} </div>
        <div>Alert message: {alert}</div>
    </div>
    );
}

export default Shop;