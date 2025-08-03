import { useState,useEffect } from 'react'
import {ToastContainer, toast } from 'react-toastify'
import { createClient } from '@supabase/supabase-js'

const url =import.meta.env.VITE_SUPABASE_URL
const key =import.meta.env.VITE_SUPABASE_KEY
const supabase=createClient(url,key)


const Password = () => {

const [form,setForm]=useState({
  password:""
});

useEffect(()=>{

 supabase.auth.getSession().then(({ data: { session } }) => {
    if (!session) {
      supabase.auth.getSessionFromUrl().then(({ data, error }) => {
        if (error) console.error("Session URL Error:", error);
        else console.log("Session set from URL");
      });
    }
  });


},[])


const handleChange=(e)=>{

setForm({...form,[e.target.name]:e.target.value})

}

const handleSubmit=async (e)=>{

 e.preventDefault(); 

 const {data,error} = await supabase.auth.updateUser({
  password:form.password
});

if(error)
  toast.success(error.message);
else
 toast.success("Password updated successfully");

}

 
  return (
    <div>

       <form onSubmit={handleSubmit}>
        

      <label>New password* </label><br></br>  
      <input 
      required id="password" 
      name="password" 
      type="password" 
      onChange={handleChange}/>  

      <input
       type="submit" 
       value="Submit"
       />

      </form>
      <ToastContainer toastStyle={{ backgroundColor: "lightblue" }}/>

    </div>
  )
}

export default Password