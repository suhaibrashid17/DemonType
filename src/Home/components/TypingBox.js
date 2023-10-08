import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
const Levels = require("../../data.json");
function TypingBox() {
  const level_index = useParams();
  const level = Levels.levels;
  let writtenarray = level[level_index.id - 1].text;
  let givenTime=parseInt(level[level_index.id-1].time);
  const [WrittenText, SetWrittenText] = useState([]);
  const [correctIndex, SetCorrectIndex] = useState([]);
  const [wrongIndex, SetWrongIndex] = useState([]);
  const [startingTime, SetStartingTime] = useState(0);
  const [secondsLeft, SetSecondsLeft] = useState(givenTime);
  const [Expired,SetExpired]=useState(false);
  
  
  let typedtext = useRef("");
  let correctIndices = useRef([]);
  let wrongIndices = useRef([]);


  const handleKeyDown = useCallback((event) => {  
      if (
        ((event.key >= "a" && event.key <= "z") ||
          (event.key >= "A" && event.key <= "Z") ||
          event.key === " " ||
          event.key === "." ||
          event.key === "," ||
          event.key==="'"||
          (event.key >= "0" && event.key <= "9")) &&
        !(event.key.length > 1)
      ) {

        typedtext.current += event.key;
        // if the currently typed key is typed at the correct position
        if (
          typedtext.current[typedtext.current.length - 1] === writtenarray[typedtext.current.length - 1]
        ) {
          correctIndices.current.push(typedtext.current.length - 1);
          SetCorrectIndex(correctIndices.current);
        } else {
          wrongIndices.current.push(typedtext.current.length - 1);
          SetWrongIndex(wrongIndices.current);
        }
      }
      if (event.key === "Backspace") {
        
        const len = typedtext.current.length;
        typedtext.current = typedtext.current.slice(0, len - 1); //does not include len-1, len-1 is being removed

        if (correctIndices.current.includes(len - 1)) {
          const index = correctIndices.current.indexOf(len - 1);
          correctIndices.current.splice(index, 1);
          SetCorrectIndex(correctIndices.current);
        } else if (wrongIndices.current.includes(len - 1)) {
          const index = wrongIndices.current.indexOf(len - 1);
          wrongIndices.current.splice(index, 1);
          SetWrongIndex(wrongIndices.current);
        }
      }
      writtenarray = typedtext.current + writtenarray.slice(typedtext.current.length);
      SetWrittenText(writtenarray.split(""));
      writtenarray = level[level_index.id - 1].text;
  },[])

  const DisplayResults = () => {
    SetExpired(true);
    window.removeEventListener('keydown', handleKeyDown);
    document.getElementById('start-button').disabled=false;
    document.getElementById('start-button').innerText='Start Again';
  };

  const startTimer = () => {
    const start = Date.now();
    const time = new Date(start);
    SetStartingTime(time);
    SetExpired(false);
    correctIndices.current=[];
    wrongIndices.current=[];
    SetCorrectIndex([]);
    SetWrongIndex([]);
    typedtext.current='';
    writtenarray=level[level_index.id-1].text;
    SetWrittenText(writtenarray.split(''));
    SetSecondsLeft(givenTime);
    window.addEventListener("keydown", handleKeyDown);
    document.getElementById('start-button').innerText='Start';
    document.getElementById('start-button').disabled=true;
  };

  useEffect(() => {
    if (startingTime) {
        const intervalId = setInterval(() => {
        const currentTime = Date.now();
        const TimePassed = currentTime - startingTime;
        const timeleft = Math.floor(givenTime - ((TimePassed / 1000) % givenTime));
        if(timeleft<=0)
        {
          clearInterval(intervalId);
          DisplayResults();
        }
        SetSecondsLeft(timeleft);
      }, 900);

      return () => clearInterval(intervalId);
    }
  }, [startingTime]);

  useEffect(() => {
    SetWrittenText(writtenarray.split(""));
  }, []);

  return (
    <>
      <div className="flex justify-around min-w-screen">
        <button 
          id="start-button"
          onClick={() => startTimer()}
          className="bg-green-500 p-3 text-white rounded-xl font-mono"
        >
          Start
        </button>
        {!(Expired)&&(
          <p className="bg-green-500 p-3 text-white rounded-xl font-mono">
            {secondsLeft} sec
          </p>
       )}
      </div>
    {(!Expired)&&(
      <div className="flex justify-center items-center mt-8">
        <div className="flex justify-center h-96 w-8/12 border border-yellow-600 border-4 rounded-xl">
          <p className="text-3xl p-6 bg-pitchBlack overflow-x-auto break-words">
            {WrittenText.map((text, index) => (
              <span
                key={index}
                className={
                  correctIndex.includes(index)
                    ? "text-green-600"
                    : wrongIndex.includes(index)
                    ? "text-red-500"
                    : "text-gray-500"
                }
              >
                {text === " " ? "\u00A0" : text}
              </span>
            ))}
          </p>
        </div>
      </div>
      )}
      {
        Expired&&(
          <div className="flex justify-center items-center mt-8 text-white min-w-screen h-64 flex-column text-3xl">
            <div>
            <p>Total Words = {writtenarray.length}</p>
            <p>Words Typed = {wrongIndex.length+correctIndex.length} </p>
            <p>Correct Percentange = {(correctIndex.length/writtenarray.length)*100}</p>
            <p>Wrong Percentange = {(wrongIndex.length/writtenarray.length)*100}</p>
            </div>
           
          </div>
        )
      }
    </>
  );
}
export default TypingBox;
