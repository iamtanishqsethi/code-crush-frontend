import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "@/Utils/slice/feedSlice.ts";
import { useEffect } from "react";
import FeedCard from "@/Components/Feed/FeedCard.tsx";
import { BASE_URL } from "@/Utils/constants.ts";
import { Skeleton } from "@/Components/ui/skeleton.tsx";
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert.tsx";
import { AlertCircle } from "lucide-react";
import { Button } from "@/Components/ui/button.tsx";
import {User} from "@/Utils/types.ts";



const Feed = () => {
    const dispatch = useDispatch()
    const feed = useSelector((store:{feed:User[]|null})=>store.feed)
    const getFeed = async () => {
        try {
            if (feed) return;
            const response = await axios.get(BASE_URL + "/api/user/feed", {
                withCredentials: true,
            })
            dispatch(addFeed(response.data))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getFeed()
    },[])


    if (feed===null) {
        return (
            <div className="flex flex-col items-center justify-center h-screen max-w-md mx-auto p-6">
                <div className="w-full space-y-4">
                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-3 w-24" />
                        </div>
                    </div>

                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />


                    <div className="flex flex-wrap gap-2">
                        <Skeleton className="h-6 w-16 rounded-full" />
                        <Skeleton className="h-6 w-24 rounded-full" />
                        <Skeleton className="h-6 w-20 rounded-full" />
                    </div>


                    <div className="flex justify-between pt-4">
                        <Skeleton className="h-9 w-24 rounded-md" />
                        <Skeleton className="h-9 w-24 rounded-md" />
                    </div>
                </div>
            </div>
        );
    }

    if (!feed||feed.length===0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen max-w-md mx-auto p-6">
                <Alert variant="default" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>No profiles available</AlertTitle>
                    <AlertDescription>
                        There are no profiles to display in your feed at the moment.
                    </AlertDescription>
                </Alert>

                <div className="flex flex-col items-center text-center">
                    <div className="text-zinc-400 mb-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-24 w-24 mx-auto mb-4 opacity-60"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <p className="text-lg font-medium">Your feed is empty</p>
                        <p className="text-sm mt-2">Check back later for new profiles or try refreshing.</p>
                    </div>
                    <Button onClick={getFeed} className="mt-4 cursor-pointer">
                        Refresh Feed
                    </Button>
                </div>
            </div>
        )
    }
    return (
        <div className="flex items-center justify-center h-screen pt-12">
            <FeedCard item={feed[0]} />
        </div>
    )
}
export default Feed