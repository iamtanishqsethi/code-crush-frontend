import {Avatar, AvatarFallback, AvatarImage,} from "./ui/avatar"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem,DropdownMenuTrigger,} from "./ui/dropdown-menu.tsx"

import {Link} from "react-router"
import {useSelector} from "react-redux"
import {Button} from "@/Components/ui/button.tsx";
import {useLocation, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import  axios from "axios";
import {removeUser} from "@/Utils/slice/userSlice.ts";
import { toast } from "sonner"
import {useEffect, useState} from "react";
import {removeFeed} from "@/Utils/slice/feedSlice.ts";
import {BASE_URL} from "@/Utils/constants.ts";
import {Flame} from "lucide-react";
import {User} from "@/Utils/types.ts";


const NavBar=()=>{
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const user = useSelector((store: { user: User | null }) => store.user)
    const [isLogin,setIsLogin]=useState<boolean>(false)

    const location = useLocation();
    const path=location.pathname
    useEffect(()=>{
        if(path==="/login"){
            setIsLogin(true);
        }
        else{
            setIsLogin(false);
        }
    },[path])

    const handleLogout = async () => {
        try{
            const response=await axios.post(BASE_URL+"/user/logout",null,{
                withCredentials:true,
            })
            console.log(response)
            dispatch(removeUser())
            dispatch(removeFeed())
            toast.success("Logged out successfully.")


        }
        catch(error){
            console.log(error)
            toast.error("Something went wrong")
        }
    }

    return (
        <div className={' fixed top-0 flex items-center justify-between px-10 py-5 z-40  w-screen backdrop-blur-2xl'}>
            <Link to={"/"}>
                <div className={' text-lg md:text-2xl  font-medium flex items-center justify-center'}>
                    <Flame className={"text-amber-500 h-5 w-5 md:h-8 md:w-8"} fill={"currentColor"}/>CodeCrush
                </div>
            </Link>
            <div className={'flex items-center justify-end space-x-6'}>
                {user && <h1 className={'font-medium hidden md:block'}>Hello , {user?.firstName}</h1>}

                {!user && !isLogin &&  <Button
                    className={"cursor-pointer rounded-full"}
                    onClick={()=>navigate("/login")}>Login</Button>}
                {user && <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Avatar className={"hover:cursor-pointer border"}>
                            <AvatarImage src={user?.photoUrl} alt="@shadcn" />
                            <AvatarFallback>{user?.firstName}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <Link to={'/profile'}>
                            <DropdownMenuItem>
                                Profile
                            </DropdownMenuItem>
                        </Link>
                        <Link to={'/feed'}>
                            <DropdownMenuItem>
                            Feed
                             </DropdownMenuItem>
                        </Link>
                        <Link to={"/connections"}>
                            <DropdownMenuItem>
                            Connections
                            </DropdownMenuItem>
                        </Link>
                        <Link to={"/requests"}>
                            <DropdownMenuItem>
                            Request
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem onClick={handleLogout} className={'cursor-pointer'}>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>

                </DropdownMenu>}
            </div>


        </div>
    )
}
export default NavBar;
