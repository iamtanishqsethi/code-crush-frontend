import {io} from 'socket.io-client'
import {BASE_URL} from "@/Utils/constants.ts";


export const createSocketConnection=()=>{
    if(location.hostname === 'localhost'){
        return io(BASE_URL)
    }else {
        return io("/",
            {transports:["websocket"]})
    }


}