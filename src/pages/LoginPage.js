import { useDispatch } from "react-redux";
import LoginForm from "../Auth/components/LoginForm";
import Navbar from "../Auth/components/Navbar";
import { useEffect,useState } from "react";
function LoginPage() {
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
  return (
    <>
    <Navbar></Navbar>
    <div className="flex lg:flex-row md:flex-row flex-col lg:justify-around md:justify-around lg:items-start md:items-start items-center bg-pitchBlack min-h-screen min-w-screen">
      <img
        className="flex items-center w-96 mt-6"
        src={process.env.PUBLIC_URL + "./akaza.jpg"}
      ></img>
       <LoginForm></LoginForm>
       {!isMobile&&(
      <img
        className="flex w-4/12 mt-24 lg:flex md:flex hidden"
        src={process.env.PUBLIC_URL + "./zenitsu.jpg"}
      ></img>)
       }
    </div>
    </>
  );
}
export default LoginPage;
