import Hero from "@/Components/Hero.tsx";
import Features from "@/Components/Features.tsx";
import HowItWorks from "@/Components/HowItWorks.tsx";

const Landing = () => {

    return (
        <div className="min-h-screen w-screen overflow-x-hidden">
            <Hero/>
            <Features/>
            <HowItWorks/>
        </div>
    );
};

export default Landing;