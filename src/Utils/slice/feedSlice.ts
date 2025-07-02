import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import {User} from "@/Utils/types.ts";

type FeedState = User[] | null;

const feedSlice = createSlice({
    name: "feed",
    initialState: null as FeedState,
    reducers: {
        addFeed: (_state, action: PayloadAction<User[]>) => {
            return action.payload
        },
        removeFeed: () => {
            return null;
        },
        removeUserFromFeed:(state,action:PayloadAction<string>)=>{
            if (state===null) return state;
            return state.filter((user:User) => user._id !== action.payload);
        }
    }
})

export const {addFeed,removeFeed,removeUserFromFeed}=feedSlice.actions
export default feedSlice.reducer