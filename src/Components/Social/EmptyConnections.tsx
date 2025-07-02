import { UserX } from "lucide-react";

const EmptyConnections=()=> {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center">
            <div className="rounded-full bg-muted p-6 mb-4">
                <UserX className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">No connections yet</h3>
            <p className="text-muted-foreground max-w-sm">
                You don't have any connections at the moment. Start connecting with others to build your network.
            </p>
        </div>
    );
}
export default EmptyConnections;