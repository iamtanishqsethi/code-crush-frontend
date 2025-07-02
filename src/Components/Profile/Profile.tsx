import {Avatar, AvatarFallback, AvatarImage,} from "../ui/avatar.tsx"
import {Badge} from "@/Components/ui/badge.tsx";
import {Button} from "@/Components/ui/button.tsx";
import { Pencil } from 'lucide-react';
import { CardDescription, } from "@/Components/ui/card.tsx";
import {useSelector} from "react-redux";
import { useState ,useEffect} from "react";
import EditProfile from "@/Components/Profile/EditProfile.tsx";
import useFetchUser from "@/Utils/hooks/useFetchUser.ts";
import {User} from "@/Utils/types.ts";



const Profile=()=>{

    const [isEditPage, setIsEditPage] = useState<boolean>(false)
    const fetchUser=useFetchUser()


    useEffect(()=>{
        fetchUser()
    },[isEditPage])

    const user=useSelector((store:{user:User|null})=>store.user)
    if (!user) return null;
    const {firstName, lastName, emailId ,age,gender,photoUrl,about,skills=[]} = user

    return (
        <div className={'flex flex-col items-center  min-h-screen pt-28 relative'}>
            {!isEditPage ? (
                <>
                    <Button
                        onClick={() => setIsEditPage(true)}
                        className={'absolute right-10 top-24  bg-zinc-300/30 text-black hover:bg-zinc-300 dark:bg-zinc-700/30 dark:text-white z-20'}>
                        <Pencil/> <span className={'hidden md:block'}>Edit Profile</span>
                    </Button>
                    <Avatar className={"w-32 h-32 border"}>
                        <AvatarImage src={photoUrl} alt="@shadcn" />
                        <AvatarFallback>{firstName}</AvatarFallback>
                    </Avatar>
                    <h1 className={'text-3xl font-medium my-2'}>{firstName} {lastName? lastName : ""}</h1>
                    <h1 className={'text-sm '}>{emailId}</h1>
                    {age !== undefined && <h2 className="text-lg">{age}{gender ? `, ${gender}` : ""}</h2>}
                    <CardDescription className={'my-2'}>{about}</CardDescription>

                    <div className={'flex w-[50%] items-center justify-center space-x-2 space-y-2 md:space-y-0 flex-wrap my-1.5'}>
                        {skills.map((skill,index:number)=>(
                            <Badge className={"rounded-lg"} key={index}>{skill}</Badge>
                        ))}
                    </div>
                    <div className={'h-0.5 w-[80%] rounded bg-zinc-700 my-1.5'}></div>
                </>
            ):<EditProfile user={user} setEdit={setIsEditPage}/>}

        </div>
    )
}
export default Profile ;