import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {BASE_URL} from "@/Utils/constants.ts";
import {useEffect} from "react";
import {addConnections} from "@/Utils/connectionSlice.ts";
import { Skeleton } from "@/Components/ui/skeleton"
import EmptyConnections from "@/Components/EmptyConnections.tsx";
import ConnectionItem from "@/Components/ConnectionItem.tsx";
import {Link} from "react-router";


type Connection={
    firstName: string
    lastName?:string
    photoUrl: string
    _id: string
}



const Connections=()=>{
    const dispatch = useDispatch();
    const fetchConnections=async ()=>{
        try{
            const response=await axios.get(BASE_URL+"/api/user/connections",
                {withCredentials:true}
            )
            // console.log(response?.data?.data)
            dispatch(addConnections(response?.data?.data));
        }
        catch (error){
            console.error(error)
        }
    }
    useEffect(()=>{
        fetchConnections()
    },[])

    const connections=useSelector((store:{connections:Connection[]|null})=>store.connections)
    if(!connections){
        return(
            <div className={'flex flex-col items-center pt-28 min-h-screen'}>
                <h1 className={'text-3xl font-medium my-2 '}>Connections</h1>

                <div className="flex flex-col items-center space-y-8 py-4">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <Skeleton className="h-12 w-12 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className={'flex flex-col items-center pt-28 h-screen '}>
            <h1 className={'text-3xl font-medium my-2'}>Connections</h1>
            {connections?.length === 0 ? (
                <EmptyConnections />
            ) : (
                <div className="flex flex-col items-center space-y-8 py-4 ">
                    {connections.map((connection) => (
                        <Link to ={`/chat/${connection._id}`} key={connection._id}>
                            <ConnectionItem
                            firstName={connection.firstName}
                            lastName={connection.lastName}
                            photoUrl={connection.photoUrl}
                            _id={connection._id}
                        />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
export default Connections;