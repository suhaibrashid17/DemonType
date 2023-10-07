import { useEffect, useState } from "react";

function TypingBox(){
    const [WrittenText,SetWrittenText]=useState([]);
    const [correctIndex,SetCorrectIndex]=useState([]);
    const [wrongIndex,SetWrongIndex]=useState([]);
    var writtenarray='Those who regretted their own actions, I would never trample over them. Because demons were once human too. Just like me, they were human too.';
    var typedtext='';
    var correctIndices=[];
    var wrongIndices=[];
    useEffect(()=>{
          SetWrittenText(writtenarray.split(''));
          window.addEventListener('keydown',(event)=>{
            if(((event.key>='a'&&event.key<='z')||(event.key>='A'&&event.key<='Z')||event.key===' '||event.key==='.'||event.key===','||(event.key>='0'&&event.key<='9'))&&!(event.key.length>1)){
              typedtext+=event.key;
              // if the currently typed key is typed at the correct position
              if(typedtext[typedtext.length-1]===writtenarray[typedtext.length-1])
              {
                correctIndices.push((typedtext.length)-1);
                SetCorrectIndex(correctIndices);
              }
              else{
                wrongIndices.push((typedtext.length)-1);
                SetWrongIndex(wrongIndices);
              }
            }
            if(event.key==='Backspace'){
                console.log('in');
               const len=typedtext.length;
               typedtext= typedtext.slice(0,len-1);//does not include len-1, len-1 is being removed

    
               if(correctIndices.includes(len-1)){
                const index=correctIndices.indexOf(len-1);
                 correctIndices.splice(index,1);
                 SetCorrectIndex(correctIndices);
               }

               else if(wrongIndices.includes(len-1)){
                 const index=wrongIndices.indexOf(len-1);
                 wrongIndices.splice(index,1);
                 SetWrongIndex(wrongIndices);
               }
            }
             writtenarray=typedtext+writtenarray.slice(typedtext.length);     
             SetWrittenText(writtenarray.split(''));
             writtenarray='Those who regretted their own actions, I would never trample over them. Because demons were once human too. Just like me, they were human too.';
          });
    },[])

     return(
       <> 
       <div className="flex justify-around min-w-screen">
          <button className="bg-green-500 p-3 text-white rounded-xl font-mono">Start</button>
          <p className="bg-green-500 p-3 text-white rounded-xl font-mono">30 sec</p>
       </div>
       
        <div className="flex justify-center items-center mt-8">
            
            <div className="flex justify-center h-96 w-8/12 border border-yellow-600 border-4 rounded-xl">
                   <p  className="text-3xl p-6 bg-pitchBlack overflow-x-auto break-words">
                   {WrittenText.map((text, index) => (
                       <span key={index} className={(correctIndex.includes(index))?'text-green-600':wrongIndex.includes(index)?'text-red-500':'text-gray-500'}>{text===' '?'\u00A0':text}</span>
                    ))}
                    </p>
            </div>
        </div>
        </>
     )
}
export default TypingBox;