import { useSelector, useDispatch } from "react-redux";
import { setSessionTime, setSelectedVal, setSeconds } from "../features/timerSlice";

export default function Session() {

  const sessionTime = useSelector((state) => state.sessionTime)
  const selected = useSelector((state) => state.selected)
  const flag = useSelector((state) => state.flag)
  const dispatch = useDispatch()

  function increment() {
    if (!flag && sessionTime < 60) {
      if (selected == "Session")
        dispatch(setSelectedVal(sessionTime + 1))

      dispatch(setSessionTime(sessionTime + 1))
      dispatch(setSeconds(0))
    }
  }

  function decrement() {
    if (!flag && sessionTime > 1) {
      if (selected == "Session")
        dispatch(setSelectedVal(sessionTime - 1))

      dispatch(setSessionTime(sessionTime - 1))
      dispatch(setSeconds(0))
    }
  }

  return (
    <div className="flex flex-col justify-center items-center border-4 shadow-sky-500 shadow-lg hover:shadow-sky-400 hover:shadow-xl  border-blue-600 text-blue-600 sm:p-6 p-4 rounded-xl w-[250px] sm:w-[300px]">
      <h3 id="session-label" >Session Length</h3>
      <div className="flex flex-row justify-center items-center gap-5 sm:p-4 p-2">
        <button id="session-increment" className="hover:text-blue-400" onClick={increment}>△</button>
        <h3 id="session-length" className="sm:text-2xl text-xl w-[30px] text-center">{sessionTime}</h3>
        <button id="session-decrement" className="hover:text-blue-400" onClick={decrement}>▽</button>
      </div>
    </div>
  );
}