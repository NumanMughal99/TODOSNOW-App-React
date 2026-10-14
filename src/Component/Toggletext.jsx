import { useState } from "react"
function Toggletext(){
  const [visible , setVisible] = useState(false);
  const [like , setLike] = useState(false);
 const ShowHide =()=>{
 setVisible(!visible)
 }
const liked = ()=>{
  setLike(!like)
}
 return(
  <>
  <h1>Heading</h1>
    <button onClick={ShowHide}>{!visible? "show" : "hide"}</button>
    <p>{visible && <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ea dignissimos saepe cupiditate placeat facilis! Ratione 
        nisi voluptas id, iste veniam magnam dolor beatae corporis 
        porro qui saepe quis commodi architecto officia minus atque 
        corrupti voluptate ipsum excepturi recusandae 
        accusamus cupiditate. Voluptatum ex sint maxime labore!
        <button onClick={liked}>{!like? " 🤍like":" ❤liked"}</button>
        </p>
        
        }
      </p>
     
  </>
 )
}
export default Toggletext