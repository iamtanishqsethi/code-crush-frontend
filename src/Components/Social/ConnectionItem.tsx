import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar.tsx";
import { Card } from "@/Components/ui/card.tsx";

interface ConnectionProps {
    firstName: string;
    lastName?: string;
    photoUrl: string;
    _id: string;
}

 const ConnectionItem=({ firstName, lastName, photoUrl}: ConnectionProps)=> {
    const fullName = `${firstName} ${lastName || ""}`.trim();

    return (
        <Card className="w-[380px] p-4 transition-all hover:shadow-md">
            <div className="flex items-center space-x-4">
                <Avatar  className="h-14 w-14 border">
                    <AvatarImage src={photoUrl} alt={fullName} />
                    <AvatarFallback>{firstName}</AvatarFallback>
                </Avatar>

                <div className="space-y-1">
                    <p className="font-medium text-lg">{fullName}</p>
                </div>
            </div>
        </Card>
    );
}
export default ConnectionItem;