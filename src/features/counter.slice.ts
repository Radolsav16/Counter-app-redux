import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface CounterState  {
    counter:number
}

const initialState:CounterState ={
    counter :0
} 


const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        increment:(state) => {
             state.counter += 1;
        },
        decrement:(state) =>{
            state.counter -= 1;
        },
        addInputedValue:(state,action:PayloadAction<number>) =>{
            state.counter += action.payload
        },

        resetInputedValue:(state) =>{
            state.counter = 0
        }
    }
})


export const {increment,decrement,addInputedValue,resetInputedValue} = counterSlice.actions;



export const counterReducer = counterSlice.reducer