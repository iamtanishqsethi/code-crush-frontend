import {ModeToggle} from "@/Components/ModeToggle.tsx";

const Child=()=>{
    return(
        <div className={'flex flex-col items-center justify-center h-screen' }>
            <h1 className={'text-3xl font-bold'}>hello tsx </h1>
            <ModeToggle/>
        </div>
    )
}
export default Child;