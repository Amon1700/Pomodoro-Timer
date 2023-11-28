import { useSelector, useDispatch } from "react-redux";
import { setBreakTime, setSelectedVal, setSeconds } from "../features/timerSlice";

export default function Break() {

  const breakTime = useSelector((state) => state.breakTime)
  const selected = useSelector((state) => state.selected)
  const flag = useSelector((state) => state.flag)
  const dispatch = useDispatch()

  function increment() {
    if (!flag && breakTime < 60) {
      if (selected == "Break")
        dispatch(setSelectedVal(breakTime + 1))

      dispatch(setBreakTime(breakTime + 1))
      dispatch(setSeconds(0))

    }
  }
  function decrement() {
    if (!flag && breakTime > 1) {
      if (selected == "Break")
        dispatch(setSelectedVal(breakTime - 1))

      dispatch(setBreakTime(breakTime - 1))
      dispatch(setSeconds(0))
    }
  }

  return (
    <div className="flex flex-col justify-center items-center border-4 shadow-sky-500 shadow-lg hover:shadow-sky-400 hover:shadow-xl border-blue-600 text-blue-600 rounded-xl sm:p-6 p-4 w-[250px] sm:w-[300px] ">
      <h3 id="break-label" >Break Length</h3>
      <div className="flex flex-row justify-center items-center gap-5 sm:p-4 p-2 ">
        <button id="break-increment" className="hover:text-blue-400" onClick={increment}>△</button>
        <h3 id="break-length" className="sm:text-2xl text-xl w-[30px] text-center" >{breakTime}</h3>
        <button id="break-decrement" className="hover:text-blue-400" onClick={decrement}>▽</button>
      </div>
    </div>
  );
}