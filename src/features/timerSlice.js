import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sessionTime: 25,
  breakTime: 5,
  seconds : 0,
  selectedVal : 25,
  selected : "Session",
  flag : false
}

export const timerSlice = createSlice({
  name : 'timer',
  initialState,
  reducers : {
    setSessionTime: (state,action) => {
      state.sessionTime = action.payload
    },
    setBreakTime: (state,action) => {
      state.breakTime = action.payload
    },
    setSeconds: (state,action) => {
      state.seconds = action.payload
    },
    setSelectedVal : (state, actions) => {
      state.selectedVal = actions.payload
    },
    setselected : (state, actions) =>{
      state.selected = actions.payload
    },
    setFlag: (state, actions) => {
      state.flag = actions.payload
    },
  }
})

export const { setSessionTime, setBreakTime, setSeconds, setSelectedVal, setselected, setFlag} = timerSlice.actions
export default timerSlice.reducer