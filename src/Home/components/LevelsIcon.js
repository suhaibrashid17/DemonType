import { Link } from "react-router-dom";

function LevelIcon({Level}){
    return(
        <div className="flex flex-column">
            <div className="p-3">
                <Link to={"/level/"+Level.level}>
                    <img src={process.env.PUBLIC_URL+"./"+Level.name+".jpg"} className="w-48 rounded-full border-2 border-white m-2 hover:scale-110 hover:opacity-75 hover:cursor-pointer"></img>
                </Link>
              <p className="text-white w-full flex justify-center ">{Level.name}</p>
            </div>
        </div>
    )
}
export default LevelIcon;