import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type Connection={
    firstName: string
    lastName?:string
    photoUrl: string
    _id: string
}
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