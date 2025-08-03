const {createClient}  = require("@supabase/supabase-js");
const express = require("express");
const app = express();
require('dotenv').config();
const path = require("path");
const bp = require('body-parser');
const cors=require('cors');
const nodemailer=require('nodemailer');

app.use(express.json({limit:'2mb'})); 
app.use(cors({
  origin: "http://localhost:5173", // allow your frontend
  methods: ["GET", "POST"],        // allow these methods
  credentials: true                // optional, if you use cookies
}))
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "dist")));


const url = process.env.VITE_SUPABASE_URL;
const key = process.env.VITE_SUPABASE_KEY;
const secret = process.env.VITE_SUPABASE_SECRET_KEY;

//connection with DataBase
const supabase = createClient(url,key);

const supabase2 = createClient(url,secret);


//Home-route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

//Signup-route
app.post("/Signup",async(req,res)=>{

const username=req.body.username;  
const useremail=req.body.email
const userpassword=req.body.password;
const userpass=req.body.Pass;
const usercountry=req.body.country;
const userphone=req.body.phone;

const image=req.body.image;
const base64data = image.replace(/^data:image\/\w+;base64,/, "");
const buffer = Buffer.from(base64data,"base64");

const fileExt = image.match(/^data:image\/(\w+);base64,/)[1];
 const fileName = `${Date.now()}.${fileExt}`;

if(userpassword!=userpass){

  return res.json({message:'password do not match'});

}
          
                         
const { data, error } = await supabase
    .from("TRAVEL")
    .select("*")
    .eq("UserName", username);



if(data && Object.keys(data).length>0){

return res.json({message:"UserName is already taken."})

}
       
           //email authentication
          const {data:authdata,error:autherror} = await supabase.auth.signUp({
            
            email:useremail,
            password:userpassword,

            options:{
              data:{
                phone:userphone,
                first_name:username,
                country:usercountry,
              },
            }
          })

          if(autherror){

            console.log("Error during authentication!  ->  ",autherror);
            res.send({message:autherror.message})
          }

          else{

           console.log(authdata);
           //data insertion

             // write code to check whether the email already registered or not.
                  
        const {data:dat,error:err} = await supabase
                                               .from("TRAVEL")
                                               .select("*")
                                               .eq("Email",useremail);

            if(Object.keys(dat).length>0){
              console.log(dat);
              return res.send({message:"User already Exist.Please Login"});

            }
            else if (err){
              console.log(err);
            }
            else{
             
              const {data:idata,error:ierror} = await supabase
                                              .storage
                                              .from("tourist-profile-pics")
                                              .upload(fileName,buffer,{
                                                contentType:`image/${fileExt}`,
                                              });
              
            console.log(idata);
            console.log(ierror);

            if(ierror)
              res.send({message:ierror.message})
            
            const {data:newdata,error:newerror} = await supabase
                                                        .from("TRAVEL")
                                                        .insert([{
                                'UserName':username,
                                'Email':useremail,
                                'Country':usercountry,
                                'Phone number':userphone,
                                'path':fileName,
                                                         }]).select()

            if(newerror){        
            console.log("Error during insertion!  ->  ",newerror);
            res.send({message:newerror.message})
            }
            else
            {

            res.send({message:"Email sent"})
             };
               
          }
        }
               });

//Login-route
app.post('/Login',async(req,res)=>{

const email =  req.body.email;
const pass =  req.body.password;
  
  const {data:{session,user},error} = await supabase.auth.signInWithPassword({

    email:email,
    password:pass

  })

if(error){
console.log(error);
return res.send({
  message:error.message,
  sess:null,
})

}



if(user){
   console.log(user);
  const { data:filePath, error:e } = await supabase
    .from("TRAVEL")
    .select("path")
    .eq("Email", email);

  const { data:dat } = supabase.storage.from('tourist-profile-pics')
                       .getPublicUrl(filePath[0].path) 

if(dat){
 // console.log(dat);
return res.send({

  message:dat.publicUrl,
  sess:session
})  
}
// return res.send({
//   message:err.message,
//   sess:null
// })
}
});

//Email confrimation Route
app.post('/Update',async(req,res)=>{

const user_email=req.body.email;

if(user_email){


const {data,error} = await supabase.auth.resetPasswordForEmail(
 user_email,
 { redirectTo:"http://localhost:5173/Password",
})

if(error){
  console.log(error);
res.send({message:error.message});
}
console.log(data,error);
if(data){
  console.log(data);
res.send({message:"Password reset link sent"});
}

}
else
console.log("NO email");

})

//Admin Login-route
app.post('/AdminLogin',async(req,res)=>{

 const {admin_email,admin_password}=req.body;

 const email = process.env.admin_email;
 const pass =  process.env.admin_password;


if(admin_email==email &&
   admin_password==pass){

 const {data,error} = await supabase.auth.signInWithPassword({

    email:admin_email,
    password:admin_password

  })

if(error){
console.log(error);
return res.send({message:"Wrong credentials",
error:error.message,

});
}

if(data){

return res.send({
  message:data.user.email,
  error:"",
})
}

}
res.send({})
})

 // List User Route
app.get('/UserList',async(req,res)=>{

const { data:{users}, error } = await supabase2.auth.admin.listUsers();

if(error){
  console.log(error.message);
  res.json([]);
}

res.json(users);

})

app.get('/Travellerlist',async(req,res)=>{

const { data, error } = await supabase
                                .from("TRIP")
                                .select("*");

if(error){
  console.log(error.message);
  res.json([]);
}

res.json(data);

})

  // Delete User Route
app.post('/DeleteUser',async(req,res)=>{

const {id,email}= req.body;
console.log(id);

const {data,error} =await supabase2.auth.admin.deleteUser(id);

if(error){
    res.send({message:error.message});
}


const {data:dat,error:err} = await supabase
  .from('TRAVEL')
  .delete()
  .eq('Email', email)
  .select()

if(err){
  res.send({message:err.message});
}
    res.send({message:"User deleted Successfully"});




})

  // Trip Data Route
app.post('/Tripdata',async(req,res)=>{

const {id,name,email,phone,destination,travelDate,travelers,tripType,message}=req.body;

const {data,error:err} = await supabase
                     .from("TRIP")
                     .insert({
                      User_id:id,
                      travelDate:travelDate,
                      name:name,
                      email:email,
                      phone:phone,
                      travelers:travelers,
                      type:tripType,
                      destination:destination,
                      message:message,
                      }).select()

 if(data){

//Nodemailer

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.admin_email,
    pass: process.env.app_password,
  },
});

try{
  const info = await transporter.sendMail({
    from: process.env.admin_email,
    to: email,
    subject: "Booking email",
    text: "Thank you for your booking request! Our travel expert will contact you within 24 hours.",
  })
  res.send({message:"Check ur email",
            error:"False",
            });
}
catch(error){
  res.send({message:error.message,
    error:"True",
  })
}
 }                     
 else{
  res.send({message:err.message,
            error:"True",
  });
 }

})

app.post('/Blogs',async(req,res)=>{
  
const {title,rating,comment,excerpt,name,email}=req.body;

  const {data,error} = await supabase
                               .from("TRAVEL")
                               .select("path")
                               .eq('Email',email)

const {data:dat,error:e} = supabase.storage.from('tourist-profile-pics')
                           .getPublicUrl(data[0].path); 



  if(error)
  res.send({message:error.message,url:""});
if(data){

const {data:insert,error:e} = await supabase
                              .from("Comments")
                              .insert({"Name":name,
                                       "path":dat.publicUrl,
                                       "title":title,
                                       "ratings":rating,
                                       "comment":comment,
                                       "excerpt":excerpt
                              })
                              .select("*")

if(insert)
  res.send({
  message:insert,
  url:dat.publicUrl
});
if(e)
  res.send({
  message:e.message,
  url:"",
});
}

});


const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server started on port ${PORT}`));