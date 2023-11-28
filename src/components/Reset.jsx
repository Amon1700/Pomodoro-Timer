import {useSelector,useDispatch} from "react-redux"
import { setSessionTime, setBreakTime, setSelectedVal, setselected, setSeconds, setFlag} from "../features/timerSlice"

export default function Reset() {
    const dispatch = useDispatch()
    const selectedVal = useSelector(state => state.selectedVal)
    function reset() {
        dispatch(setSessionTime(25))
        dispatch(setBreakTime(5))
        dispatch(setSelectedVal(25))
        dispatch(setselected("Session"))
        dispatch(setSeconds(0))
        dispatch(setFlag(false))
        document.getElementById("beep").load()
    }
    return (
        <div>
            <button className={`border-2 sm:p-3 p-1 rounded-xl 
            ${!selectedVal ? "border-red-600 hover:border-red-400 text-red-600 hover:text-red-400" 
            : "border-blue-600 hover:border-blue-400 text-blue-600 hover:text-blue-400"} 
            sm:w-[100px] w-[80px] sm:text-2xl text-xl" `} id="reset" onClick={reset}>Reset</button>
        </div>
    )
}