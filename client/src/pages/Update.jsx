import {React,useState} from 'react'
import { ToastContainer,toast } from 'react-toastify'
//import Dark from './Dark';

const Update = () => {

   const[form,setForm]=useState({
    email:''
  })



   const handleChange =(e)=>{
    e.preventDefault();
    
    setForm({...form,[e.target.name]:e.target.value})
   
    
   }

   const handleSubmit= (e)=>{

     e.preventDefault();
     console.log(form);
    fetch('http://localhost:8080/Update',{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
        body:JSON.stringify(form)
     })
     .then((res)=> res.json())
     .then((result)=>{
         toast.success(result.message);
     })
     .catch((error)=>{
      console.log(error);
      
      toast.success("Internal error");
     })

   }

  return (
    <div>
 {/* <Dark/> */}
        <form onSubmit={handleSubmit}>

            <label>Email:</label>
            <br/>
         <input 
         required id="email"
         type="email"
         placeholder="your registered email"
         name="email"
        onChange={handleChange}
         />
         <br/>

        <input type='submit' value="Submit"/>
        </form>
        <ToastContainer toastStyle={{ backgroundColor: "lightblue" }}/>
       
    </div>
  )
}

export default Update