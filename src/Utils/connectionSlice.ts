import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
const connectionSlice = createSlice({
    name: "connections",
    initialState:null,
    reducers:{
        addConnections:(state,action:PayloadAction)=>{
            return action.payload;
        },
        removeConnections:()=>{
            return null
        }
    }
})
export const {addConnections,removeConnections}=connectionSlice.actions;
export default connectionSlice.reducer