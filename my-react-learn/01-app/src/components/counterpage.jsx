import React, {useState} from "react";



function MyComponent(props)
{
    const [count,setCount] =useState(0);
    console.log("Rendering......");
    return(
    <div>
    <div>{props.name}</div>
    <h1>Counter Val : {count} </h1>
    <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
    );
}

export default MyComponent;

