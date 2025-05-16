import {DotPattern} from "@/Components/magicui/dot-pattern.tsx";
import {cn} from "@/lib/utils.ts";
import {ShinyButton} from "@/Components/magicui/shiny-button.tsx";
import {TextAnimate} from "@/Components/magicui/text-animate.tsx";
import {InteractiveHoverButton} from "@/Components/magicui/interactive-hover-button.tsx";
import {useNavigate} from "react-router-dom";

const Hero=()=>{
    const navigate=useNavigate();

    return(
        <div className="relative min-h-screen  pt-18 md:pt-16 flex flex-col items-center justify-center text-center overflow-x-hidden">
            <div className="absolute inset-0 top-10 flex items-center justify-center">
                <DotPattern  className={cn(
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

                <h1 className="text-balance text-lg leading-none hidden md:block md:text-2xl px-48 text-zinc-500">

                    <TextAnimate animation="slideLeft" by="character" className={''}>
                        Beautifully crafted connections where code meets chemistry - discover profiles highlighting
                        passionate tech stacks, coding rhythms, and the human behind the syntax.
                    </TextAnimate>
                </h1>
                <InteractiveHoverButton onClick={() => navigate("/feed")} className={'text-lg md:text-xl'}>
                    Try Now
                </InteractiveHoverButton>
            </div>
        </div>
    )
}
export default Hero;