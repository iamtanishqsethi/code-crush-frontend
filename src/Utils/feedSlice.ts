import type { PayloadAction } from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
const feedSlice = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed: (state, action:PayloadAction) => {
            return action.payload
        },
        removeFeed:()=>{
            return null;
        }
    }
})

export const {addFeed,removeFeed}=feedSlice.actions
export default feedSlice.reducer