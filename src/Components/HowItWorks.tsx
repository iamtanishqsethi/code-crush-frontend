import {SparklesText} from "@/Components/magicui/sparkles-text.tsx";
import {CardDescription, CardHeader} from "@/Components/ui/card.tsx";
import Iphone15Pro from "@/Components/magicui/iphone-15-pro.tsx";

const HowItWorks=()=>{
    return (
        <div className="flex flex-col md:flex-row items-center w-screen justify-between overflow-x-hidden  py-12">
            <div className="w-full md:w-[50%] p-8 md:p-12">
                <h1 className="text-3xl italic mb-6">
                    <SparklesText sparklesCount={4}>How It Works</SparklesText>
                </h1>
                <ul className="space-y-6">
                    <li className="flex items-start">
                        <span className="text-2xl ">📋</span>
                        <div>
                            <CardHeader className="text-xl font-semibold ">Create Your Profile</CardHeader>
                            <CardDescription className="">Add your photo, bio, and skills in a few simple steps to showcase your expertise.</CardDescription>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-2xl ">👆</span>
                        <div>
                            <CardHeader className="text-xl font-semibold ">Start Swiping</CardHeader>
                            <CardDescription className="">Swipe right to connect with developers you’re interested in or left to pass.</CardDescription>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-2xl ">💬</span>
                        <div>
                            <CardHeader className="text-xl font-semibold ">Connect & Collaborate</CardHeader>
                            <CardDescription className="">Accept requests, chat with matches, and build your professional network.</CardDescription>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="relative w-full md:w-[50%] h-96 md:h-150">
                <Iphone15Pro
                    className="size-full"
                    src="https://i.ibb.co/39G416rX/image.png"
                />
            </div>
        </div>
    )
}
export default HowItWorks;