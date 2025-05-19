import {useParams} from "react-router-dom";
import {FormEvent, useEffect, useRef} from "react";
import {useState} from "react";
import {createSocketConnection} from "@/Utils/socket.ts";
import {useSelector} from "react-redux";
import axios from "axios";
import {BASE_URL} from "@/Utils/constants.ts";
import {Avatar, AvatarFallback, AvatarImage} from "@/Components/ui/avatar.tsx";
import {Input} from "@/Components/ui/input.tsx";
import {Send} from "lucide-react";
import {toast} from "sonner";

type User = {
    firstName: string;
    lastName?: string
    emailId: string
    age?: number
    gender?: string
    photoUrl?: string;
    about?: string
    skills?: [string]
    _id: string
}

type ChatObj = {
    senderId: {
        firstName: string,
        lastName?: string,
        photoUrl: string,
        _id: string
    }
    text: string,
}

const Chat = () => {
    const user = useSelector((store: { user: User | null }) => store.user);
    const { targetUserId } = useParams();
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState<ChatObj[]>([]);
    const [isOnline,setIsOnline]=useState(false);
    // const [isTyping,setIsTyping]=useState(false);
    const [targetUserData, setTargetUserData] = useState<User>()
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const lastMessageRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    }

    const fetchChatMessages = async () => {
        const response = await axios.get(`${BASE_URL}/api/chat/${targetUserId}`, {withCredentials: true})
        setMessages(response.data.messages)
    }

    useEffect(() => {
        fetchChatMessages();
    }, []);

    useEffect(() => {
        if (user && targetUserId) {
            const socket = createSocketConnection()
            socket.emit("joinChat", {userId: user._id, targetUserId,})

            socket.on("newMessageReceived", ({firstName, lastName, photoUrl, text, _id}) => {
                setMessages((prevState) => [...prevState, {
                        senderId: {
                            firstName,
                            lastName,
                            photoUrl,
                            _id
                        },
                        text
                    }]
                )
            })

            socket.on("userOnlineStatus",({userId,isOnline})=>{
                if(userId==targetUserId){
                    setIsOnline(isOnline)
                }
            })

            return () => {
                socket.emit("leaveChat",{userId:user._id,targetUserId})
                socket.disconnect()

            }
        }
    }, [user, targetUserId]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const fetchTargetUser = async () => {
        const response = await axios.get(BASE_URL + "/api/user/find/" + targetUserId, {withCredentials: true});
        setTargetUserData(response.data);
    }

    useEffect(() => {
        if (targetUserId) {
            fetchTargetUser()
        }
    }, [targetUserId]);

    if (!user?._id) return null;

    const sendMessage = () => {
        if (newMessage === "") {
            toast.error("Please enter a valid message");
            return
        }
        const socket = createSocketConnection()
        socket.emit("sendMessage", {
            firstName: user.firstName,
            lastName: user.lastName,
            photoUrl: user.photoUrl,
            userId: user._id,
            targetUserId,
            text: newMessage
        })
        setNewMessage("")
    }

    return (
        <div className={'flex flex-col items-center justify-center w-full md:px-8'}>
            <div className="w-full border-3 border-zinc-600 rounded-2xl h-[85vh] flex flex-col mt-20">
                <div className="p-5 border-b-3 border-zinc-600 flex items-center space-x-3">
                    <div className="relative">
                        <Avatar className="h-10 w-10 border">
                            <AvatarImage src={targetUserData?.photoUrl} alt="@shadcn" />
                            <AvatarFallback>{targetUserData?.firstName}</AvatarFallback>
                        </Avatar>
                        <div
                            className={`${
                                isOnline ? "bg-green-600" : "bg-gray-600"
                            } h-2.5 w-2.5 rounded-full border-2 border-white absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 z-20`}
                        ></div>
                    </div>


                    <h1 className={'text-lg font-medium'}>{targetUserData?.firstName}{" "}{targetUserData?.lastName}</h1>

                </div>
                <div
                    ref={scrollContainerRef}
                    className="flex flex-col overflow-y-scroll h-[90%] scroll-smooth"
                >
                    {messages.map((message, index) => {
                        const isCurrentUser = message.senderId._id === user._id;
                        return (
                            <div
                                key={index}
                                className={`flex ${isCurrentUser ? 'justify-end ' : 'justify-start'} my-2`}
                            >
                                <div className={`flex ${isCurrentUser ? 'flex-row-reverse ' : ''} items-center`}>
                                    <Avatar className={"h-8 w-8 border mx-2"}>
                                        <AvatarImage src={message.senderId?.photoUrl} alt="@shadcn" />
                                        <AvatarFallback>{message.senderId?.firstName}</AvatarFallback>
                                    </Avatar>
                                    <div
                                        className={`max-w-xs px-4 py-2 rounded-full text-white ${
                                            isCurrentUser ? 'bg-blue-600 ' : 'bg-zinc-700'
                                        }`}
                                    >
                                        <p>{message.text}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div ref={lastMessageRef}></div>
                </div>
                <div className="p-5 border-t-3 border-zinc-600 flex items-center gap-2">
                    <form className="flex items-center gap-2 w-full"
                          onSubmit={(e: FormEvent<HTMLFormElement>) => {
                              e.preventDefault();
                              sendMessage()
                          }}>
                        <Input className=""
                               value={newMessage}
                               onChange={(e) => {
                                   const socket = createSocketConnection()
                                   socket.emit("typing")
                                   setNewMessage(e.target.value)
                               }}
                        />
                        <button
                            className={'bg-blue-700 p-2.5 rounded-full'}
                            type={"submit"}
                        ><Send/></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Chat