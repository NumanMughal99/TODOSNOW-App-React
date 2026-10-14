import React from "react";
import { useState } from "react";
function Hello(props){
const [count , setCount]= useState(0);
const changeNumber =()=>{
   setCount(count+1)
}

return(
   <>
   
   <h1>Student Details</h1>
   <p>Name:{props.name}</p>
    <p>age:{props.age}</p>
     <button onClick={props.Handelclick}>{props.click}</button>

     <h1>counter :{count}</h1>
      <button onClick={changeNumber}>count</button>
    
    </>

)

}
export default Hello;