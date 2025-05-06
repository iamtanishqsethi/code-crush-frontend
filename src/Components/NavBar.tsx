import {Avatar, AvatarFallback, AvatarImage,} from "./ui/avatar"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem,DropdownMenuTrigger,} from "./ui/dropdown-menu.tsx"
import {ModeToggle} from "@/Components/ModeToggle.tsx";
import {Link} from "react-router"
import {useSelector} from "react-redux"
import {Button} from "@/Components/ui/button.tsx";
import {useLocation, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import  axios from "axios";
import {removeUser} from "@/Utils/userSlice.ts";
import { toast } from "sonner"
import {useEffect, useState} from "react";
import {removeFeed} from "@/Utils/feedSlice.ts";
import {BASE_URL} from "@/Utils/constants.ts";


type User = {
    firstName: string;
    photoUrl?: string;
}

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
        <div className={' fixed top-0 flex items-center justify-between px-10 py-5 z-10 shadow  shadow-zinc-200 dark:shadow-zinc-800 w-screen'}>
            <Link to={"/"}><h1 className={'text-2xl'}>CodeCrush</h1></Link>
            <div className={'flex items-center justify-end space-x-6'}>
                {user && <h1 className={'font-medium'}>Hello ,{user?.firstName}</h1>}
                <ModeToggle/>
                {!user && !isLogin &&  <Button
                    className={"cursor-pointer"}
                    onClick={()=>navigate("/login")}>Login</Button>}
                {user && <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Avatar className={"hover:cursor-pointer"}>
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
