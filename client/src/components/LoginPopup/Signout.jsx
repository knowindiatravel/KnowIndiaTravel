import React from 'react'
import { createClient } from '@supabase/supabase-js';
//import Dark from './Dark';

const url =import.meta.env.VITE_SUPABASE_URL
const key =import.meta.env.VITE_SUPABASE_KEY
const supabase=createClient(url,key)


const Signout = () => {


const handleSubmit=async (e)=>{

 e.preventDefault(); 
const {error} = await supabase.auth.signOut();

if(error){
  toast.success(error.message);
}
else{
  localStorage.removeItem("auth.session");
  localStorage.removeItem("user.image");
  localStorage.removeItem("admin.email");
window.location.reload();
}
}


  return (
    <div>
      <button onClick={handleSubmit}>Signout</button>

    </div>
  )
}

export default Signout