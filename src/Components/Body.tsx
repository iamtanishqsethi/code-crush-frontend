import {Outlet} from "react-router-dom";
import NavBar from "@/Components/NavBar.tsx";
import {useDispatch} from "react-redux";
import  axios from "axios";
import {addUser} from "@/Utils/userSlice.ts";
import {useEffect} from "react";
// import {useNavigate} from "react-router-dom";

const Body=()=>{

    const dispatch = useDispatch();
    // const navigate=useNavigate();

    const fetchUser=async ()=>{
        try{
            const response=await axios.get("http://localhost:7777/api/profile",{withCredentials:true});
            dispatch(addUser(response.data));
        }
        catch(err){
            console.error(err);
        }
    }
    useEffect(()=>{
       fetchUser();
    },[])

    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}
export default Body;