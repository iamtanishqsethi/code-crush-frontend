import {configureStore} from "@reduxjs/toolkit";
import userSlice from "@/Utils/userSlice.ts";
import feedSlice from "@/Utils/feedSlice.ts";
import connectionSlice from "@/Utils/connectionSlice.ts";
import requestSlice from "@/Utils/requestSlice.ts";

const appStore=configureStore({
    reducer:{
        user:userSlice,
        feed:feedSlice,
        connections:connectionSlice,
        requests:requestSlice,
    }
})
export default appStore;