import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import {Request} from "@/Utils/types.ts";

const requestSlice = createSlice({
    name:"requests",
    initialState:null as Request[] | null,
    reducers:{
        addRequests:(_state,action:PayloadAction)=>{
            return action.payload;
        },
        removeRequests:()=>{
            return null
        }
    }
})

export const {addRequests,removeRequests}=requestSlice.actions;
export default requestSlice.reducer;