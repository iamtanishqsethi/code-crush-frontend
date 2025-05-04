import {configureStore} from "@reduxjs/toolkit";
import userSlice from "@/Utils/userSlice.ts";

const appStore=configureStore({
    reducer:{
        user:userSlice,
    }
})
export default appStore;