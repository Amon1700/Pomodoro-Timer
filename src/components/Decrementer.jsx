import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setSeconds, setSelectedVal, setselected  } from "../features/timerSlice"
export default function Decrementer() {

    const dispatch =  useDispatch()
    const sessionTime = useSelector((state) => state.sessionTime)
    const breakTime = useSelector((state) => state.breakTime)
    const seconds = useSelector((state) => state.seconds)
    const selectedVal = useSelector((state)=> state.selectedVal) 
    const selected = useSelector((state)=>state.selected)
    
    useEffect(()=>{
        const id = setInterval(()=>{
            if(seconds == 0) {
                if(selectedVal == 0) {
                    if(selected == "Session") {
                        dispatch(setSelectedVal(breakTime))
                        dispatch(setselected("Break"))
                        dispatch(setSeconds(0))

                    } else {
                        dispatch(setSelectedVal(sessionTime))
                        dispatch(setselected("Session"))
                        dispatch(setSeconds(0))

                    }
                }
                else {
                    dispatch(setSeconds(59))
                    dispatch(setSelectedVal(selectedVal-1))
                }
            }
            else
            dispatch(setSeconds(seconds-1))
        }, 1000)
        return ()=>{
            clearInterval(id)
        }
    })
    return (
        <></>
    )
}