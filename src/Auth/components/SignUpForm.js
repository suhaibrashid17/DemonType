import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Register, selectStatus } from "../AuthSlice";
import MoonLoader from "react-spinners/MoonLoader"
import validator from "validator";
function LoginForm(){
    const [name,SetName]=useState('');
    const [email,SetEmail]=useState('');
    const [password,SetPassword]=useState('');
    const [EmailValidator,SetEmailValidator]=useState('');
    const [PasswordValidator,SetPasswordValidator]=useState('');
    const status=useSelector(selectStatus);
    const dispatch=useDispatch();
    const UserDetails={
        name:name,
        email:email,
        password:password,
    }
    const RegisterUser=async()=>{
        const isEmailValid = validator.isEmail(email);
        const isPasswordValid = validator.isStrongPassword(password, {minLength: 8,minLowercase: 1,minUppercase: 1,minNumbers: 1,minSymbols: 1 });       
        if (isEmailValid) {
            SetEmailValidator('');
        } else {
            SetEmailValidator('Enter a valid Email');
        }
        
        if (isPasswordValid) {
            SetPasswordValidator('');
        } else {
            SetPasswordValidator('Is this a Password Bro? You Drunk?');
        }
        
        console.log(isPasswordValid + isEmailValid);
        
        if (isPasswordValid && isEmailValid) {
            await dispatch(Register(UserDetails));
        }     
    }
    return(
    <div className="flex flex-col items-center justify-center h-96 lg:w-4/12 md:w-4/12 w-80 mt-16">       
        <div className="flex flex-col w-full border border-yellow-600 rounded-2xl items-center">
            
            <p className="font-bloodcrow text-yellow-600 text-4xl py-8">Get Started</p>
            {(EmailValidator||PasswordValidator||status==="signuperror")&&(
              <p className="font-bloodcrow text-red-600 text-lg py-4">{EmailValidator||PasswordValidator||"A user with this email already exists."}</p>
            )}
            {(status==="signupfulfilled")&&(
              <p className="font-bloodcrow text-green-600 text-lg py-4">Registered Successfully</p>
            )}
            <input value={name} onChange={(e)=>{SetName(e.target.value)}} type="text" placeholder=" Enter Full Name" className=" p-2 m-2.5 focus:border focus:border-black bg:white w-9/12 rounded-2xl"></input>
            <input value={email} onChange={(e)=>{SetEmail(e.target.value)}} type="text" placeholder=" Enter Email" className=" p-2 m-2.5 focus:border focus:border-black bg:white w-9/12 rounded-2xl"></input>
            <input value={password} onChange={(e)=>SetPassword(e.target.value)} type="password" placeholder=" Enter Password" className=" p-2 mb-10 m-2.5 focus:border focus:border-black bg:white w-9/12 rounded-2xl"></input>
            {!(status==="pending")&&(
                <button onClick={()=>RegisterUser()} className="p-2 px-4 bg-yellow-600 font-bloodcrow text-lg rounded-2xl mb-9 hover:scale-105 hover:opacity-75">Sign Up</button>
            )}
            {status==="pending"&&(
                <button onClick={()=>RegisterUser()} className="p-2 px-4 bg-yellow-600 font-bloodcrow text-lg rounded-2xl mb-9 hover:scale-105 hover:opacity-75"><MoonLoader></MoonLoader>Sign Up</button>
            )}
            <div class="flex px-7 w-full items-start mb-6 justify-between font-bloodcrow text-white">
                <p>Already a Demon Slayer?</p>
                <Link className="underline hover:scale-105 hover:opacity-75" to="/login">Login now</Link>
            </div>
        </div>
      </div>
    )
}
export default LoginForm;