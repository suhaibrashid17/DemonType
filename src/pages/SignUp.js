
import { useState,useEffect } from 'react';
import SignUpForm from '../Auth/components/SignUpForm'
import Navbar from '../Auth/components/Navbar';
function SignUp()
{
    const [isMobile,SetMobile]=useState(false);
    const handleResize=()=>{
      if(window.innerWidth<922)
      {
        SetMobile(true);
      }
      else{
        SetMobile(false);
      }
    }
    useEffect(()=>{
        window.addEventListener('resize',handleResize);
    },[])
    return(
        <>
    <Navbar></Navbar>
    <div className="flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between lg:items-start md:items-start items-center bg-pitchBlack min-h-screen min-w-screen">
      
      <img
        className="flex items-center w-80 mt-6"
        src={process.env.PUBLIC_URL + "./muzan.png"}
      ></img>
       <SignUpForm></SignUpForm>
       {!isMobile&&(
      <img
        className="flex w-3/12 mt-0 lg:flex md:flex hidden"
        src={process.env.PUBLIC_URL + "./tanjiro.jpg"}
      ></img>)
       }
    </div>
    </>
    )
}
export default SignUp;