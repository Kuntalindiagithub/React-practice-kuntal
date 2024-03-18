import React from "react";
/*import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";*/

import { useSelector } from "react-redux"
import {useDispatch} from "react-redux"

import {increaseCounter,decreaseCounter} from "../redux/slices/countSlice"


const CounterRedux = () => {
    const count = useSelector((state) => state);
    const dispatch =useDispatch();

    console.log("Count->",count);
    return(
        <div>
            <h1>{count.count1.length}</h1>
            <button onClick={ (e) => dispatch(increaseCounter({name : "Item", price : "20"}))}>Increment</button>
            <button onClick={ (e) => dispatch(decreaseCounter({name : "Item", price : "20"}))}>Decrement</button>
            
        </div>
    )
};
/*<h2>{count}</h2>*/
/*<button onClick={ e => dispatch({type : "DECREMENT"})}>Decrement</button>*/

export default CounterRedux;