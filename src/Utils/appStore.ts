import {configureStore} from "@reduxjs/toolkit";
import userSlice from "@/Utils/slice/userSlice.ts";
import feedSlice from "@/Utils/slice/feedSlice.ts";
import connectionSlice from "@/Utils/slice/connectionSlice.ts";
import requestSlice from "@/Utils/slice/requestSlice.ts";

const appStore=configureStore({
    reducer:{
        user:userSlice,
        feed:feedSlice,
        connections:connectionSlice,
        requests:requestSlice,
    }
})
export default appStore;