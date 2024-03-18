import {createStore} from "redux"
import {configureStore} from "@reduxjs/toolkit"
/*import countReducer from "./slices/countSlice"*/
import todoReducer from './slices/todo'

/*const reducer = (state = 0, action) => {
    switch(action.type)
    {
        case 'INCREMENT' : return state + 1;
        case 'DECREMENT' : return state - 1;
        default: return state;
    }
}*/

/*export const store = createStore(reducer);*/ 

export const store =configureStore({
    /*reducer : {
        count1 : countReducer,
    },*/
    reducer : {
        todo : todoReducer,
    },
    
});