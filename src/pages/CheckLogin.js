
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLoggedinUser } from "../Auth/AuthSlice";
function CheckLogin({children}){
    const user=useSelector(selectLoggedinUser);
   if(!user)
   {
    return <Navigate to="/login"/>
   }
   return children;
}
export default CheckLogin;