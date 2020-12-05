import {useReducer, useState} from 'react';

export const ReducerHook = () => {
    function reducerfunction(state, action) {
        switch(action.type){
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;  
            case 'ADD_TODO':
                return {todos: [...state.todos, {text: action.text, completed: 'false'}], todoCount: state.todoCount + 1} 
            case 'UPDATE_COMPLETED':
                return {
                    ...state,
                    todos: state.todos.map((e, idx)=> idx === action.index ? {...e, completed: !e.completed}: e),
                }
            default:
                return state;          
        }
    };

    const [counter, dispatch] = useReducer(reducerfunction, 0);
    const [{todos, todoCount}, setTodo] = useReducer(reducerfunction, {todos:[], todoCount:0});
    const [text, setText] = useState("");

    return (
        <div>
                <button onClick={()=> dispatch({type:'INCREMENT'})}>Reducer+</button>
                <button onClick={()=> dispatch({type:'DECREMENT'})}>Reducer-</button>
                <div>reducercount: {counter}</div>
                <form onSubmit={e => {
                    e.preventDefault();
                    setTodo({type: 'ADD_TODO', text});
                    setText("");
                    }}>
                    <input value={text} onChange={e => setText(e.target.value)} />
                </form>
                {todos.map((e, index)=> (
                    <div key={e.text} onClick={() => setTodo({type:'UPDATE_COMPLETED', index})}>
                        {e.text}
                        {e.completed}
                    </div>
                ))}
                <div>Todo Count: {todoCount}</div>
        </div>
    );

};

