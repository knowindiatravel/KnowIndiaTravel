import React from 'react'
import { createClient } from '@supabase/supabase-js'
import { ToastContainer,toast } from 'react-toastify'

const url =import.meta.env.VITE_SUPABASE_URL
const key =import.meta.env.VITE_SUPABASE_KEY
const supabase=createClient(url,key)

const GoogleAuth = () => {

  const  handleClick=async(e)=>{
  
    e.preventDefault();

   const {data,error} = await supabase.auth.signInWithOAuth({
    provider:'google',
    options:{
      redirectTo:"http://localhost:5173/auth/callback",
    },
   })  

   console.log("Redirect URL from Supabase:", data?.url);
   
   if(error)
    toast.success(error.message);
  }

  return (
    <div>
    <button className="social-btn" onClick={handleClick}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                    alt="Google"
                    width="18"
                  >
                
                    </img>
                </button>
       <ToastContainer/>
    </div>
  )
}

export default GoogleAuth