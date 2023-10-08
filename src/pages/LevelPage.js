import { useParams } from "react-router-dom";
import Navbar from "../Home/components/Navbar";
import TypingBox from "../Home/components/TypingBox";

function LevelPage(){
    const level=useParams();
 return(
    <div className="bg-pitchBlack min-h-screen">
        <Navbar/>
        <TypingBox/>
    </div>
 )
}
export default LevelPage;