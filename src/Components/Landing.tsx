import { TextAnimate } from "@/Components/magicui/text-animate.tsx";
import { InteractiveHoverButton } from "@/Components/magicui/interactive-hover-button.tsx";
import { useNavigate } from "react-router-dom";
import Iphone15Pro from "@/Components/magicui/iphone-15-pro.tsx";
import { SparklesText } from "@/Components/magicui/sparkles-text.tsx";
import {CardDescription, CardHeader} from "@/Components/ui/card.tsx";
import {DotPattern} from "@/Components/magicui/dot-pattern.tsx";
import {cn} from "@/lib/utils.ts";
import {ShinyButton} from "@/Components/magicui/shiny-button.tsx";
import {Code, Github, Zap} from "lucide-react";

const Landing = () => {
    const navigate = useNavigate();
    const features = [
        {
            icon: Code,
            title: "Match by Tech Stack",
            desc: "Find your perfect pair programmer with tech stack compatibility that clicks—whether you're a React rockstar or a Ruby romantic.",
        },
        {
            icon: Github,
            title: "Share Projects",
            desc: "Let your code do the talking. Showcase your GitHub projects, blogs, and side hustles that reveal your coding soul.",
        },
        {
            icon: Zap,
            title: "Real-time Geek Chat",
            desc: "Dive into debates about tabs vs. spaces or bond over bug fixes in our specialized chat where tech talk flows freely.",
        },
    ];
    return (
        <div className="min-h-screen w-screen overflow-x-hidden">
            <div className="relative min-h-screen  pt-18 md:pt-16 flex flex-col items-center justify-center text-center overflow-x-hidden">
                <div className="absolute inset-0 top-10 flex items-center justify-center">
                    <DotPattern glow={true} className={cn(
                        "[mask-image:radial-gradient(800px_circle_at_center,white,transparent,transparent)]",
                    )}/>
                </div>

                <div className="relative z-10 space-y-3 overflow-x-hidden">
                    <ShinyButton className={"bg-zinc-900/20 px-4 py-1 rounded-full relative z-10 text-xs border-2 border-zinc-700"}>
                        ⚡ Connect with Code
                    </ShinyButton>
                    <h1 className="text-balance text-5xl font-bold sm:text-6xl md:text-8xl  leading-[1.2] bg-gradient-to-br from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                        <TextAnimate animation="slideLeft" by="word">
                            CodeCrush is the new way
                            to find your coding partner!
                        </TextAnimate>
                    </h1>

                    <h1 className="text-balance text-lg leading-none hidden md:block md:text-2xl">
                        <TextAnimate animation="slideLeft" by="character" className={'px-48 text-zinc-500'}>
                            Beautifully crafted connections where code meets chemistry - discover profiles highlighting
                            passionate tech stacks, coding rhythms, and the human behind the syntax.
                        </TextAnimate>
                    </h1>
                    <InteractiveHoverButton onClick={() => navigate("/feed")} className={'text-lg md:text-xl'}>
                        Try Now
                    </InteractiveHoverButton>
                </div>
            </div>
            <div className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent to-zinc-900/20">

                <div className="max-w-7xl mx-auto">

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-12 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                        Features
                    </h1>
                    <div className="flex items-center justify-center flex-wrap gap-8 mt-8">
                        {features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl transition-all ease-in-out duration-150 hover:scale-[1.02]   shadow-lg flex flex-col items-center w-1/3"
                                >
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/10 mb-6  transition-all ease-in-out duration-150">
                                        <Icon className="w-8 h-8 text-zinc-200 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm text-center">{feature.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
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
        </div>
    );
};

export default Landing;