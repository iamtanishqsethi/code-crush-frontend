import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type Feed = {
    _id: string
    firstName: string
    lastName?: string,
    photoUrl?: string,
    about?: string,
    skills: string[]
}

type FeedState = Feed[] | null;

const feedSlice = createSlice({
    name: "feed",
    initialState: null as FeedState,
    reducers: {
        addFeed: (_state, action: PayloadAction<Feed[]>) => {
            return action.payload
        },
        removeFeed: () => {
            return null;
        },
        removeUserFromFeed:(state,action:PayloadAction<string>)=>{
            if (state===null) return state;
            return state.filter((user: Feed) => user._id !== action.payload);
        }
    }
})

export const {addFeed,removeFeed,removeUserFromFeed}=feedSlice.actions
export default feedSlice.reducer