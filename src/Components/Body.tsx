
import {Outlet} from "react-router-dom";
import NavBar from "@/Components/NavBar.tsx";

const Body=()=>{
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}
export default Body;