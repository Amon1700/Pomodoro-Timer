import { useSelector, useDispatch } from "react-redux"
import { setFlag } from "../features/timerSlice";
import Reset from "./Reset";
import Decrementer from "./Decrementer"

export default function Timer() {

    const dispatch = useDispatch()
    const seconds = useSelector((state) => state.seconds)
    const selectedVal = useSelector((state) => state.selectedVal)
    const selected = useSelector((state) => state.selected) 
    const flag = useSelector((state) => state.flag)
    
    return (
        <div className={`flex flex-col justify-center items-center border-4
            ${!selectedVal ? "border-red-600 text-red-600  shadow-red-500 shadow-lg hover:shadow-red-400 hover:shadow-xl" 
            : "border-blue-600 text-blue-600  shadow-sky-500 shadow-lg hover:shadow-sky-400 hover:shadow-xl"} 
            rounded-xl sm:p-4 p-2 w-[250px] sm:w-[300px]`}>
            <h2 id="timer-label" >{selected}</h2>
            <h2 id="time-left" className="sm:text-2xl text-xl" >{selectedVal<10? "0" + selectedVal : selectedVal}:{seconds < 10 ? "0" + seconds : seconds}</h2>
            {flag && <Decrementer/>}
            
                <div className="flex gap-3 m-4">
            <Reset/>
            <button className={`border-2 
            ${!selectedVal ? "border-red-600 hover:border-red-400 text-red-600 hover:text-red-400" 
            : "border-blue-600 hover:border-blue-400 text-blue-600 hover:text-blue-400"}
             sm:p-3 p-1 rounded-xl sm:w-[100px] w-[80px] sm:text-2xl text-xl`}
              id="start_stop" onClick={()=>{dispatch(setFlag(!flag))}}>
            {!flag ? "Start" : "Stop"}
            </button>
                </div>
        </div>
    )
}