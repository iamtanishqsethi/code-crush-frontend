import {Ripple} from "@/Components/magicui/ripple.tsx";
import {AuroraText} from "@/Components/magicui/aurora-text.tsx";
import {TextAnimate} from "@/Components/magicui/text-animate.tsx";
const Landing=()=>{

    return (
        <div className={'min-h-screen pt-20 w-screen'}>
            <div className="relative h-[600px] w-full overflow-hidden flex flex-col items-center justify-center text-center space-y-3">
                <Ripple  mainCircleSize={500}/>
                <h1 className={'text-balance text-5xl font-semibold leading-none  sm:text-6xl md:text-7xl '}>
                <TextAnimate animation="slideLeft" by="character">
                    Find Your Perfect
                </TextAnimate>{"<"}<AuroraText className={'italic'}> Dev Match</AuroraText>{"/>"}
                </h1>
                <h1 className={'text-balance text-lg  leading-none  sm:text-xl md:text-2xl   '}><TextAnimate animation="slideLeft" by="character">Match, Merge, Deploy -Together</TextAnimate></h1>
            </div>
        </div>
    )
}
export default Landing