import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {BASE_URL} from "@/Utils/constants.ts";
import {useEffect} from "react";
import {addRequests} from "@/Utils/requestSlice.ts";
import {Skeleton} from "@/Components/ui/skeleton.tsx";
import RequestItem from "@/Components/RequestItem.tsx";
import EmptyRequests from "@/Components/EmptyRequests.tsx";
import {toast} from "sonner";

type Request={
    fromUserId:{
        about: string
        firstName: string
        lastName?:string
        photoUrl: string
        _id: string
    }
    _id:string

}


const Requests=()=>{

    const dispatch = useDispatch();
    const fetchRequests=async ()=>{
        try{
            const response=await axios.get(BASE_URL+"/api/user/requests",
                {withCredentials:true}
            )

            dispatch(addRequests(response?.data?.data));
        }
        catch (error){
            console.error(error)
        }
    }
    useEffect(() => {
        fetchRequests()
    }, []);


    const reviewRequest=async (status:string,requestId:string)=>{
        try{
            const response=await axios.post(BASE_URL+`/api/request/review/${status}/${requestId}`,null,{withCredentials:true})
            if(response.status === 200){
                fetchRequests()
                toast.success("Request "+status)
            }
        }catch(error){
            console.error(error)
            toast.error("Error Reviewing Request")
        }
    }

    const requests=useSelector((store:{requests:Request[]|null})=>store.requests)

    if(!requests){
        return(
            <div className={'flex flex-col items-center pt-28 h-screen'}>
                <h1 className={'text-3xl font-medium my-2 '}>Requests</h1>

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
    <div className={'flex flex-col items-center pt-28 h-screen'}>
        <h1 className={'text-3xl font-medium my-2'}>Requests</h1>
        {requests?.length === 0 ? (
            <EmptyRequests />
        ) : (
            <div className="flex flex-col items-center space-y-8 py-4">
                {requests.map((request) => (
                    <RequestItem
                        key={request.fromUserId._id}
                        firstName={request.fromUserId.firstName}
                        lastName={request.fromUserId.lastName}
                        photoUrl={request.fromUserId.photoUrl}
                        _id={request.fromUserId._id}
                        about={request.fromUserId.about}
                        handleClick={reviewRequest}
                        requestId={request._id}
                    />
                ))}
            </div>
        )}
    </div>
    )
}
export default Requests;