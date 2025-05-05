import  axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import {addFeed} from "@/Utils/feedSlice.ts";
import {useEffect} from "react";
import FeedCard from "@/Components/FeedCard.tsx";
import {BASE_URL} from "@/Utils/constants.ts";

type Feed={
    _id:string
    firstName:string
    lastName?:string,
    photoUrl?:string,
    about?:string,
    skills:[string]
}

const Feed=()=>{
    const dispatch = useDispatch();
    const feed=useSelector((store:{feed:[Feed]|null}) =>store.feed);

    const getFeed=async ()=>{
        try{
            if(feed) return;
            const response=await axios.get(BASE_URL+"/api/user/feed",{withCredentials:true});
            dispatch(addFeed(response.data));
        }
        catch (error){
            console.log(error)
        }
    }
    useEffect(()=>{
       getFeed();
    },[])

    if(!feed) {
     return (
         <div className={'flex items-center justify-center h-screen'}>
             No data
         </div>
     )
    }

    return(
        <div className={'flex items-center justify-center h-screen pt-12'}>
            <FeedCard item={feed[0]}/>
        </div>
    )
}
export default Feed