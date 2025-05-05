import {configureStore} from "@reduxjs/toolkit";
import userSlice from "@/Utils/userSlice.ts";
import feedSlice from "@/Utils/feedSlice.ts";

const appStore=configureStore({
    reducer:{
        user:userSlice,
        feed:feedSlice
    }
})
export default appStore;