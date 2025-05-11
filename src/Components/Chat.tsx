import {useParams} from "react-router-dom";
// import {useState} from "react";

const Chat=()=>{

    const {targetUserId}=useParams()
    // const [messages,setMessages]=useState([])
    console.log(targetUserId)

    return (
        <div className="w-1/2 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col mt-20">
            <h1 className="p-5 border-b border-gray-600">Chat</h1>
            <div className="flex-1 overflow-scroll">{
                // messages.map((message,index)=>(
                //     <div
                //         key={index}
                //     >{message}</div>
                // ))
            }</div>
            <div className="p-5 border-t border-gray-600 flex items-center gap-2">
                <input className="w-full border " />
                <button>Send</button>
            </div>
        </div>
    )
}
export default Chat