import { useState } from "react"

function AdvanceForm() {
    const [input , setInput] = useState(
        {name:"",email:"",age:"",gender:"",country:"pakistan", agree:"false"})
   
 const handelChange = (e)=>{
    const {name , value,checked,type} = e.target;
    setInput({...input,
              [name]: type === "checkbox"? checked : value
        }) }
const handelClick = (e)=>{
      e.preventDefault()
      console.log(input);
}
  return (
    <div>
        <h1>Form Submissin</h1>
    <form onSubmit={handelClick}>
        Name: <input type="text" name="name" value={input.name} onChange={handelChange} />
     <br />
        Email: <input type="text" name="email" value={input.email} onChange={handelChange} />
     <br/>
        Age  :  <input type="text" name="age" value ={input.age} onChange={handelChange} />
      <br/>
      <label >
        Male <input name="gender" type="radio" value="male"
         onChange={handelChange}
         checked = {input.gender === "male"} />
      </label>
      <label >
       Female <input name="gender" type="radio" value="female"
         onChange={handelChange}
         checked = {input.gender === "female"} />
      </label>
      <br />
       <label >
        <select name="country" onChange={handelChange}>
             <option value="Pakistan">Pakistan</option>
             <option value="india">india</option>
        </select>
       </label>
       <br />
        <label >
            <input type="checkbox" name="agree"
            onChange={handelChange}
            checked ={input.agree} />
             i agree with all conditions
        </label>
      <button>submit</button>
    </form>
    </div>
  )
}

export default AdvanceForm
