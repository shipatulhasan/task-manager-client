import { createSlice } from "@reduxjs/toolkit";
export interface Counter{
  count:number
} 
const initialState:Counter = {
  count: 0
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: Counter) => {
      state.count += 1;
      
    },
    decrement: (state: Counter) => {
      if(state.count > 0)
      state.count -= 1;
      
    },
    
  }
})
export const {increment,decrement} = counterSlice.actions 

export default counterSlice.reducer