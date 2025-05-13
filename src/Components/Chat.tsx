import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useState} from "react";
import {createSocketConnection} from "@/Utils/socket.ts";
import {useSelector} from "react-redux";
import axios from "axios";
import {BASE_URL} from "@/Utils/constants.ts";


type User = {
    firstName: string;
    lastName?:string
    emailId:string
    age?:number
    gender?:string
    photoUrl?: string;
    about?:string
    skills?:[string]
    _id:string
}


type ChatObj={
    senderId:{
        firstName:string,
        lastName?:string,
        photoUrl:string,
        _id:string
    }
    text:string,

}

const Chat=()=>{


    const user = useSelector((store: { user: User | null }) => store.user);
    const { targetUserId } = useParams();
    const [newMessage,setNewMessage]=useState("");
    const [messages, setMessages] = useState<ChatObj[]>([]);


    const fetchChatMessages = async () => {
        const response=await axios.get(`${BASE_URL}/api/chat/${targetUserId}`,{withCredentials:true})
        setMessages(response.data.messages)
    }

    useEffect(() => {
        fetchChatMessages();
    }, []);

    useEffect(() => {
        if(user && targetUserId){
            const socket=createSocketConnection()
            socket.emit("joinChat",{userId:user._id,targetUserId,})

            socket.on("newMessageReceived",({firstName,lastName,photoUrl,text,_id})=>{
                setMessages((prevState)=>[...prevState,{
                    senderId:{
                        firstName,
                        lastName,
                        photoUrl,
                        _id
                    },
                    text
                    }]
                )
            })

            return ()=>{
                socket.disconnect()
            }
        }

    }, [user, targetUserId]);

    if (!user?._id) return null;

    const sendMessage=()=>{
        const socket=createSocketConnection()
        socket.emit("sendMessage",{
            firstName:user.firstName,
            lastName:user.lastName,
            photoUrl:user.photoUrl,
            userId:user._id,
            targetUserId,
            text:newMessage
        })
        setNewMessage("")
    }

    return (
        <div className="w-1/2 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col mt-20">
            <h1 className="p-5 border-b border-gray-600">Chat</h1>
            <div className="flex-1 overflow-scroll">{
                messages.map((message,index)=>(
                    <div
                        key={index}
                    >{message.senderId.firstName} {message.senderId.lastName ? message.senderId.lastName :""} {message.text}</div>
                ))
            }</div>
            <div className="p-5 border-t border-gray-600 flex items-center gap-2">
                <input className="w-full border "
                       value={newMessage}
                       onChange={(e)=>setNewMessage(e.target.value)}

                />
                <button
                    onClick={sendMessage}
                >Send</button>
            </div>
        </div>
    )
}
export default Chat