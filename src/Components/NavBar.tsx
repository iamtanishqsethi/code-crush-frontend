import {Avatar, AvatarFallback, AvatarImage,} from "./ui/avatar"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem,DropdownMenuTrigger,} from "./ui/dropdown-menu.tsx"
import {ModeToggle} from "@/Components/ModeToggle.tsx";
import {Link} from "react-router"
import {useSelector} from "react-redux"
import {Button} from "@/Components/ui/button.tsx";
import {useNavigate} from "react-router-dom"

type User = {
    firstName: string;
    photoUrl?: string;
}

const NavBar=()=>{
    const navigate = useNavigate();
    const user = useSelector((store: { user: User | null }) => store.user)


    return (
        <div className={' fixed top-0 flex items-center justify-between px-10 py-5 z-10 shadow  shadow-zinc-200 dark:shadow-zinc-800 w-screen'}>
            <Link to={"/"}><h1 className={'text-2xl'}>CodeCrush</h1></Link>
            <div className={'flex items-center justify-end space-x-6'}>
                {user && <h1 className={'font-medium'}>Hello ,{user?.firstName}</h1>}
                <ModeToggle/>
                {!user && <Button
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
                        <DropdownMenuItem>
                            Connections
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Request
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>

                </DropdownMenu>}
            </div>


        </div>
    )
}
export default NavBar;
