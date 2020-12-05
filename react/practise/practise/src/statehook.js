import React, { useState } from 'react';
import { CustomHook } from './customhook';
import { ShowHello } from './showhello';
import { useFetch } from './useFetch';

const StateHook = () => {
    const [{count1, count2}, setCount] = useState({count1: 0, count2: 100});
    const [values, setValues] = CustomHook({email: '', paswword: ''});
    const [showhello, setShowhello] = useState(true);

    const {data, loading} = useFetch('http://numbersapi.com/43/trivia');

    function onIncrement() {
        setCount(currentCount => ({
            ...currentCount,
            count1:currentCount.count1 + 1 
            })
        )
    };

    function onDecrement() {
        setCount(currentCount => ({
            ...currentCount,
            count2:currentCount.count2 - 1 
            })
        )
    };

    return (
        <div>
            {loading ? 'loading...' : data}
            <button onClick={() => setShowhello(!showhello)}>toggle</button>
            {showhello && <ShowHello />}
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <div>count1: {count1}</div>
                <div>count2: {count2}</div>
                <input name="email" value={values.email} onChange={setValues} />
                <input name="password" value={values.password} onChange={setValues} />
            </div>
        </div>
    )
};

export default StateHook;
