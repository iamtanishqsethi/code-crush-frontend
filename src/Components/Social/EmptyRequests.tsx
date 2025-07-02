import { UserX } from "lucide-react";


const EmptyRequests=()=>{
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="rounded-full bg-muted p-6 mb-4">
                <UserX className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">No Request yet</h3>
            <p className="text-muted-foreground max-w-sm">
                You don't have any Request at the moment.
            </p>
        </div>
    )
}
export default EmptyRequests;