import { configureStore } from '@reduxjs/toolkit'
import timerReducer from '../features/timerSlice'

export const store = configureStore({
  reducer: timerReducer,
})
