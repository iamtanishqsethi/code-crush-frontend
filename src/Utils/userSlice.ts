import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action: PayloadAction)=>{
            return action.payload
        },
        removeUser:()=>{
            return null;
        }
    }

 })
export  const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer