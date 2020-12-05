import {useReducer} from 'react';

export const ReducerHook = () => {
    function reducerfunction(state, action) {
        switch(action.type){
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;   
            default:
                return state;          
        }
    };

    const [counter, dispatch] = useReducer(reducerfunction, 0);

    return (
        <div>
                <button onClick={()=> dispatch({type:'INCREMENT'})}>Reducer+</button>
                <button onClick={()=> dispatch({type:'DECREMENT'})}>Reducer-</button>
                <div>reducercount: {counter}</div>
        </div>
    );

};

