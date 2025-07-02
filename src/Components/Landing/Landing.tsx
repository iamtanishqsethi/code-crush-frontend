import Hero from "@/Components/Landing/Hero.tsx";
import Features from "@/Components/Landing/Features.tsx";
import HowItWorks from "@/Components/Landing/HowItWorks.tsx";

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