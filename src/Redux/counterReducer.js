import {createSlice} from "@reduxjs/toolkit"

const counterSlice=createSlice({
    name:"counter",
    initialState:{
       counter:0
    },
    reducers:{
        handleDecCounter:(state,action)=>{
          state.counter = state.counter - 1
        },
        handleIncCounter:(state,action)=>{
           state.counter = state.counter + 1
        },
    }
})

export const {handleDecCounter,handleIncCounter}=counterSlice.actions
export default counterSlice.reducer;