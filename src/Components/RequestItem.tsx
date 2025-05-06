import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import {Card, CardDescription} from "@/Components/ui/card";
import {Button} from "@/Components/ui/button.tsx";

interface RequestProps{
    firstName: string
    lastName?:string
    photoUrl: string
    _id: string
    about: string
}


const RequestItem=({ firstName, lastName, photoUrl, about}:RequestProps)=>{
    const fullName = `${firstName} ${lastName || ""}`.trim();

    return(
        <Card className="w-[800px] max-w-md p-4 transition-all hover:shadow-md">
            <div className="flex items-center space-x-4">
                <Avatar className="h-14 w-14 border">
                    <AvatarImage src={photoUrl} alt={fullName} />
                    <AvatarFallback>{firstName}</AvatarFallback>
                </Avatar>

                <div className="space-y-1">
                    <p className="font-medium text-lg">{fullName}</p>
                    <CardDescription>{about}</CardDescription>
                    <div className="flex items-center space-x-5 my-1">
                        <Button>Ignore</Button>
                        <Button>Interested</Button>
                    </div>

                </div>
            </div>
        </Card>
    )
}
export default RequestItem