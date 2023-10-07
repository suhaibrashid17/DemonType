import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Login, selectLoggedinUser, selectStatus } from "../AuthSlice";
import validator from "validator";
import MoonLoader from "react-spinners/MoonLoader";
function LoginForm(){
    
    const [email,SetEmail]=useState('');
    const [password,SetPassword]=useState('');
    const [EmailValidator,SetEmailValidator]=useState('');
    const [PasswordValidator,SetPasswordValidator]=useState('');
    const status=useSelector(selectStatus);
    const user=useSelector(selectLoggedinUser);
    const dispatch=useDispatch();
    const UserDetails={
        email:email,
        password:password,
    }
    const LoginUser=async()=>{
        const isEmailValid = validator.isEmail(email);
        if (isEmailValid) {
            SetEmailValidator('');
        } else {
            SetEmailValidator('Enter a valid Email');
        }
        if (isEmailValid) {
            await dispatch(Login(UserDetails));
        }     
    }
    return(
    <div className="flex flex-col items-center justify-center h-96 lg:w-4/12 md:w-4/12 w-80 mt-10">       
        <div className="flex flex-col w-full border border-yellow-600 rounded-2xl items-center">
            <p className="font-bloodcrow text-yellow-600 text-4xl py-8">Let's Begin</p> 
            {(EmailValidator||PasswordValidator||status==="loginerror")&&(
              <p className="font-bloodcrow text-red-600 text-lg py-4">{EmailValidator||PasswordValidator||"Incorrect email or password"}</p>
            )}
            {user&&(
                <Navigate to="/"/>
            )}
            <input value={email} onChange={(e)=>{SetEmail(e.target.value)}} type="text" placeholder=" Enter Email" className=" p-2 m-2.5 focus:border focus:border-black bg:white w-9/12 rounded-2xl"></input>
            <input value={password} onChange={(e)=>SetPassword(e.target.value)} type="password" placeholder=" Enter Password" className=" p-2 mb-12 m-2.5 focus:border focus:border-black bg:white w-9/12 rounded-2xl"></input>
            {!(status==="pending")&&(
                <button onClick={()=>LoginUser()} className="p-2 px-4 bg-yellow-600 font-bloodcrow text-lg rounded-2xl mb-9 hover:scale-105 hover:opacity-75">Login</button>
            )}
            {status==="pending"&&(
                <button onClick={()=>LoginUser()} className="p-2 px-4 bg-yellow-600 font-bloodcrow text-lg rounded-2xl mb-9 hover:scale-105 hover:opacity-75"><MoonLoader></MoonLoader>Login</button>
            )}            <div class="flex px-7 w-full items-start mb-6 justify-between font-bloodcrow text-white">
                <p>Wanna Slay Demons?</p>
                <Link className="underline hover:scale-105 hover:opacity-75" to="/signup">Signup now</Link>
            </div>
        </div>
      </div>
    )
}
export default LoginForm;