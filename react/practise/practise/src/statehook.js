import React, { useState } from 'react';

const StateHook = () => {
    const [{count1, count2}, setCount] = useState({count1: 0, count2: 100});

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
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <div>count1: {count1}</div>
                <div>count2: {count2}</div>
            </div>
        </div>
    )
};

export default StateHook;
