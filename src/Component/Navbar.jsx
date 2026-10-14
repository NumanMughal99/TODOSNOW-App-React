import React from 'react';
// import reactLogo from '../assets/react.svg'
//module.css
//external styling
import { useState } from "react";

function Navbar (){
const [index,setIndex] = useState(0);
let handel = () => {
    setIndex(index+1);  
  };
  let clear = () => {
    setIndex(0);  
  };
return (
    <>
     <h3>count: {index}</h3>
    <button onClick ={handel}>click!</button>
    <br/>
    <button onClick ={clear}>clear!</button>
    </>
)

}
 export default Navbar