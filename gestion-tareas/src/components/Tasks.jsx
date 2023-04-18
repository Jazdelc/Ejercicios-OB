import React, { useContext, useReducer } from "react";


const ADD = 'ADD';
const DELETE = 'DELETE';
const FILTER = 'FILTER';

const myContext = React.createContext(null);

const Task = () => {

    const state = useContext(myContext);

    return (
        <p>Task: { state.task}</p>
    )
}


const Tasks = () => {

    const initialState = {
        task: 0
    }

    const reducer = (state, action) => {

        switch (action.type) {
            case ADD:
                return {
                    task: state.task + action.payload.quantity
                }
            case DELETE:
                return {
                    task: state.task + action.payload.quantity
                }
            case FILTER:
                return {
                    task: state.task
                }            
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <myContext.Provider value={state}>
        <div>
            <Task />
            <button
                onClick={
                    () => dispatch({
                        type: ADD,
                        payload: {
                            quantity: 1
                        }
                    })
                }
                > Add
                </button>
            <button
            onClick={
                () => dispatch({
                    type: DELETE,
                    payload: {
                        quantity: -1
                    }
                })
            }
             > Delete
             </button>
            <button
            onClick={
                () => dispatch({type: FILTER})
            }
            >
                Filter
            </button>     
        </div>
        </myContext.Provider>
    );
}

export default Tasks;


