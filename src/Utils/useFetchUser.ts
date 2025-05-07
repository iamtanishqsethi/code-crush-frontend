import {useDispatch} from "react-redux";
import axios from "axios";
import {addUser} from "@/Utils/userSlice.ts";

const useFetchUser = () => {
    const dispatch = useDispatch();
    const fetchUser=async ()=>{
        try{
            const response=await axios.get("http://localhost:7777/api/profile",{withCredentials:true});
            dispatch(addUser(response.data));
        }
        catch(err){
            console.error(err);
        }
    }
    return fetchUser;

}
export default useFetchUser