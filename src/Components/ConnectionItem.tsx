import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Card } from "@/Components/ui/card";

interface ConnectionProps {
    firstName: string;
    lastName?: string;
    photoUrl: string;
    _id: string;
}

 const ConnectionItem=({ firstName, lastName, photoUrl}: ConnectionProps)=> {
    const fullName = `${firstName} ${lastName || ""}`.trim();

    return (
        <Card className="w-[800px] max-w-md p-4 transition-all hover:shadow-md">
            <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12 border">
                    <AvatarImage src={photoUrl} alt={fullName} />
                    <AvatarFallback>{firstName}</AvatarFallback>
                </Avatar>

                <div className="space-y-1">
                    <p className="font-medium">{fullName}</p>
                </div>
            </div>
        </Card>
    );
}
export default ConnectionItem;