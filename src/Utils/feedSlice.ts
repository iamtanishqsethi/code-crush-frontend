import type { PayloadAction } from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

type Feed={
    _id:string
    firstName:string
    lastName?:string,
    photoUrl?:string,
    about?:string,
    skills:[string]
}

const feedSlice = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed: (state, action:PayloadAction) => {
            return action.payload
        },
        removeFeed:()=>{
            return null;
        },
        removeUserFromFeed:(state:Feed[], action:PayloadAction<string>) => {
            const newFeed=state.filter((user:Feed)=>user._id!==action.payload)
            return newFeed
        }
    }
})

export const {addFeed,removeFeed,removeUserFromFeed}=feedSlice.actions
export default feedSlice.reducer