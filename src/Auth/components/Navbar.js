function Navbar(){
    return(
        <div class="flex items-center justify-between  min-w-screen h-24 bg-pitchBlack">
            <div className="">
                <p className="flex font-bloodcrow text-white text-3xl ml-8">DEMON<span className="font-bloodcrow text-yellow-600  mx-1">-TYPE</span></p>
            </div>
            <div className="text-white font-bloodcrow mr-12">
                <ul class="flex">
                    <li><a className="inline-block mr-8 hover:cursor-pointer hover:scale-105 hover:opacity-75">About</a></li>
                    <li><a className="inline-block hover:cursor-pointer hover:scale-105 hover:opacity-75">Contact</a></li>
                </ul>
            
            </div>
          
        </div>
    );
}
export default Navbar;