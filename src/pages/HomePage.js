
import Navbar from "../Home/components/Navbar";
import LevelsIcon from "../Home/components/LevelsIcon";
const levelsObj=require('../data.json')
function HomePage()
{
    const levels=levelsObj.levels;
    const LowerMoons=levels.slice(0,6);
    const UpperMoons=levels.slice(6,13);
    return(
        <div className="bg-pitchBlack min-h-screen">
            <Navbar/>
            <div className="flex flex-start w-52 pl-8 p-3 border-b border-t border-r border-white">
              <h1 className="text-white text-4xl">Levels :-</h1>
            </div>
            <div className="flex min-w-screen justify-center">
               <h1 className="text-yellow-600 text-3xl">--------- Lower Moons ---------</h1>
            </div>
            <div className="flex flex-wrap p-10 justify-center pt-10 pb-20">
            {       
                LowerMoons.map((level,index)=>(
                    <LevelsIcon Level={level}/>
                ))
            }
            
            </div>
            <div className="flex min-w-screen justify-center">
               <h1 className="text-yellow-600 text-3xl">--------- Upper Moons ---------</h1>
            </div>
            <div className="flex flex-wrap p-10 justify-center pt-10">
            {       
                UpperMoons.map((level,index)=>(
                    <LevelsIcon Level={level}/>
                ))
            }
            
            </div>
        </div>
    )
}
export default HomePage;