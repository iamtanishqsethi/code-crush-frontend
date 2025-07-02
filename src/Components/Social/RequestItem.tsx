import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar.tsx";
import {Card, CardDescription} from "@/Components/ui/card.tsx";
import {Button} from "@/Components/ui/button.tsx";
import { UserCheck } from 'lucide-react';
import { X } from 'lucide-react';
interface RequestProps{
    firstName: string
    lastName?:string
    photoUrl: string
    _id: string
    about: string
    handleClick:(status:string,requestId:string)=>void
    requestId:string
}


const RequestItem=({ firstName, lastName, photoUrl, about,handleClick,requestId}:RequestProps)=>{
    const fullName = `${firstName} ${lastName || ""}`.trim();

    return(
        <Card className=" max-w-md p-4 transition-all hover:shadow-md">
            <div className="flex items-center space-x-4">
                <Avatar className="h-14 w-14 border">
                    <AvatarImage src={photoUrl} alt={fullName} />
                    <AvatarFallback>{firstName}</AvatarFallback>
                </Avatar>

                <div className="space-y-1">
                    <p className="font-medium text-lg">{fullName}</p>
                    <CardDescription>{about}</CardDescription>

                </div>
                <div className="flex items-center space-x-2 my-1">
                    <Button className={'rounded-full h-10 w-10 cursor-pointer'}
                            onClick={()=>handleClick("rejected",requestId)}
                    >
                        <X/>
                    </Button>
                    <Button className={'rounded-full h-10 w-10 cursor-pointer'}
                            onClick={()=>handleClick("accepted",requestId)}
                    >
                        <UserCheck/>
                    </Button>
                </div>
            </div>
        </Card>
    )
}
export default RequestItem