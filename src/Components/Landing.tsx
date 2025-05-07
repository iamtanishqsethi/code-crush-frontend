import {Ripple} from "@/Components/magicui/ripple.tsx";
import {AuroraText} from "@/Components/magicui/aurora-text.tsx";
import {TextAnimate} from "@/Components/magicui/text-animate.tsx";
const Landing=()=>{

    return (
        <div className={'min-h-screen pt-20 w-screen'}>
            <div className="relative h-[600px] w-full overflow-hidden flex flex-col items-center justify-center">
                <Ripple  mainCircleSize={500}/>
                <h1 className={'text-balance text-5xl font-semibold leading-none  sm:text-6xl md:text-7xl inline-flex'}>
                <TextAnimate animation="slideLeft" by="character">
                    Find Your Perfect
                </TextAnimate>{"<"}<AuroraText className={'italic'}>Match</AuroraText>{"/>"}
                </h1>
                <h1 className={'text-balance text-lg  leading-none  sm:text-xl md:text-2xl it '}>Match, Merge, Deploy -Together</h1>
            </div>
        </div>
    )
}
export default Landing