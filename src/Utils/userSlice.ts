import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type User = {
    firstName: string;
    lastName?:string
    emailId:string
    age?:number
    gender?:string
    photoUrl?: string;
    about?:string
    skills?:[string]
}

const userSlice=createSlice({
    name:"user",
    initialState:null as User | null,
    reducers:{
        addUser:(_state,action: PayloadAction)=>{
            return action.payload
        },
        removeUser:()=>{
            return null;
        }
    }

 })
export  const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer