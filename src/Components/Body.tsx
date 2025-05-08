import {Outlet} from "react-router-dom";
import NavBar from "@/Components/NavBar.tsx";
import useFetchUser from "@/Utils/useFetchUser.ts";
import {useEffect} from "react";
import Footer from "@/Components/Footer.tsx";


const Body=()=>{


  const fetchUser=useFetchUser()


    useEffect(()=>{
       fetchUser();
    },[])

    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Body;