

import axios from "axios";

export const register=(UserDetails)=>{
   return new Promise(async(resolve,reject)=>{
        try{
            const response= await axios.post("http://localhost:8080/api/auth/register",UserDetails);
            if(response)
            {
               resolve(response);
            }
            else{
               reject(response);
            }
        }
        catch(error)
        {
           reject(error);
        }
   })
}

export const login=(UserDetails)=>{
   return new Promise(async(resolve,reject)=>{
        try{
            console.log('im in api');
            const response= await axios.post("http://localhost:8080/api/auth/login",UserDetails);
            if(response)
            {
               resolve(response);
            }
            else{
               reject(response);
            }
        }
        catch(error)
        {
           reject(error);
        }
   })
}