import { useState } from "react";
import { useDispatch } from "react-redux";
import { Logout } from "../../Auth/AuthSlice";

function Navbar(){
    const [isProfileClicked,SetProfileClicked]=useState(false);
    const dispatch=useDispatch();
    const handleProfileClicked=()=>{
        SetProfileClicked(!isProfileClicked);
    }
    return(
        <div class="flex items-center justify-between  min-w-screen h-24 bg-pitchBlack">
            <div className="">
                <p className="flex font-bloodcrow text-white text-3xl ml-8">DEMON<span className="font-bloodcrow text-yellow-600  mx-1">-TYPE</span></p>
            </div>
            <div className="text-white font-bloodcrow mr-12">
                <ul class="flex">
                    <li onClick={()=>handleProfileClicked()}><img src={process.env.PUBLIC_URL+"./profile.jpg"} className="inline-block hover:cursor-pointer hover:scale-105 hover:opacity-75 w-14 border border-4 border-white rounded-full"></img></li>
                </ul>
            
            </div>
            {isProfileClicked&&(
              <div className="fixed top-20 right-24 bg-pitchBlack border border-white rounded-lg text-white text-xl">
                  <ul>
                      <li><button className="px-10 py-1 border-b border-white hover:scale-105 hover:opacity-75">Profile</button></li>
                      <li><button onClick={()=>dispatch(Logout())} className="rounded-lg px-10 py-1 hover:scale-105 hover:scale-105 hover:opacity-75">Logout</button></li>
                     
                  </ul>
              </div>
            )
           }
          
        </div>
    );
}
export default Navbar;