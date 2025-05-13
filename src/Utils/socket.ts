import {io} from 'socket.io-client'
import {BASE_URL} from "@/Utils/constants.ts";


export const createSocketConnection=()=>{
    return io(BASE_URL)

}