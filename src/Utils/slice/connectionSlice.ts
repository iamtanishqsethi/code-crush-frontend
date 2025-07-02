import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import {Connection} from "@/Utils/types.ts";

const connectionSlice = createSlice({
    name: "connections",
    initialState:null as Connection[] | null,
    reducers:{
        addConnections:(_state,action:PayloadAction)=>{
            return action.payload;
        },
        removeConnections:()=>{
            return null
        }
    }
})
export const {addConnections,removeConnections}=connectionSlice.actions;
export default connectionSlice.reducer