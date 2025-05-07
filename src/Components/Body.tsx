import {Outlet} from "react-router-dom";
import NavBar from "@/Components/NavBar.tsx";
import useFetchUser from "@/Utils/useFetchUser.ts";
import {useEffect} from "react";


const Body=()=>{


  const fetchUser=useFetchUser()


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