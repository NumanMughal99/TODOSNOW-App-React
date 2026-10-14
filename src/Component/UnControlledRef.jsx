import {useRef } from "react"
function UnControlledRef() {
    const nameRef = useRef("")
    const emailRef = useRef("")
    const handelClick =(e)=>{
        e.preventDefault()
        console.log("Name:" , nameRef.current.value)
        console.log("Email:" ,emailRef.current.value)
    }
  return (
    <div>
      <form onSubmit={handelClick}>
        <input type="text" ref={nameRef}  />
        <input type="text" ref={emailRef} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default UnControlledRef
