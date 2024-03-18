import {createSlice} from "@reduxjs/toolkit"

const countSlice=createSlice(
    {
        name : "count",
        initialState : [],
        reducers: {
            increaseCounter: (state,action) =>{
                state.push(action.payload);
            },
            decreaseCounter: (state,action) =>{
                state.pop(action.payload);
            }
        }
    }
)

export const { increaseCounter,decreaseCounter } =countSlice.actions;

export default countSlice.reducer;