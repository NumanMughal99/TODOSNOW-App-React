import { useState } from "react"

function FormHandling() {
    const [users, setUsers] = useState({
            name:"",
            email:"",
            age:0,
            gender :"",
            country:"pakistan",
            agree:true

    })
  const handelChange = (e)=>{
    const {name , value,checked,type} = e.target;
    setUsers({...users,
              [name]: type === "checkbox"? checked : value
        }) }
  const hsndelSUbmit =(e)=>{
    e.preventDefault()
   console.log(users)
  
  }
  return (
    <>
    <h1>Students Form</h1>
      <form onSubmit={hsndelSUbmit}>
          Name:<input type="text" 
                     name="name" value={users.name}
                     placeholder="enter name"
                     onChange={handelChange} />
                  <br/>
          Email : <input type="text" 
                         name="email" value={users.email} 
                         placeholder="enter email"
                         onChange={handelChange} />
                   <br/>
          Age : <input type="number" 
                       name="age" value={users.age}
                       placeholder="enter age" 
                       onChange={handelChange}/>
          <br/>
             <label > Select
               Male <input name="gender" 
                          type="radio" value="male"
                          onChange={handelChange}
                          checked = {users.gender === "male"}
                         />       
           </label>
             <label >
             Female <input name="gender" type="radio" value="female"
                           onChange={handelChange}
                            checked = {users.gender === "female"}
                           />
          </label>
         <br />
       <label >
        <select name="country" onChange={handelChange} value={users.country}>
             <option value="Pakistan">Pakistan</option>
             <option value="india">india</option>
        </select>
       </label>
       <br />
        <label >
            <input type="checkbox" name="agree"
             value={users.agree}
            onChange={handelChange}
            checked ={users.agree}
             />
             i agree with all conditions
        </label>
          <br />
          <button>submit</button>
          <br />
      </form>
      
    </>
  )
}

export default FormHandling
