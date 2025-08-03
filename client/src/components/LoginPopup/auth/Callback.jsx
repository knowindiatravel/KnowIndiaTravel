import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import { ToastContainer,toast } from 'react-toastify'

const url =import.meta.env.VITE_SUPABASE_URL
const key =import.meta.env.VITE_SUPABASE_KEY
const supabase=createClient(url,key)

const Callback = () => {
const nav=useNavigate();

const login=async()=>{

    const {data,error} =await supabase.auth.getSession();
    console.log(data);
     if(data.session){
        const email=data.session.user.email;

          //using email get the image 
           
           const { data:filePath, error:e } = await supabase
          .from("TRAVEL")
          .select("path")
          .eq("Email", email);
      
          const { data:dat } =await  supabase.storage.from('tourist-profile-pics')
                                 .getPublicUrl(filePath[0].path) 
      
          //send that image to app./
          if(dat){

            localStorage.setItem('auth.session',JSON.stringify(data.session));
           const { data:d, error:e1 } = await supabase.auth.setSession({
                                        access_token:data.session.access_token,
                                        refresh_token:data.session.refresh_token
           })

  if(d){
    localStorage.setItem("user.image",dat.publicUrl);
    nav("/");
}
  else
  toast.success(error.message);
          }
        else
            toast.success(e.message);
     }
     else
        toast.success(error.message);
    }

useEffect(()=>{
login();
},[])

  return (
    <div>
        redirecting u to website...
        <ToastContainer/></div>
  )
}

export default Callback