import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type Request={
    fromUserId:{
        about: string
        firstName: string
        lastName?:string
        photoUrl: string
        _id: string
    }
    _id:string

}

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