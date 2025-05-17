import {Code, Github, Zap} from "lucide-react";

const Features=()=>{
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
                            className="group bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl transition-all ease-in-out duration-150 hover:scale-[1.02]   shadow-lg flex flex-col items-center w-300 md:w-1/3"
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
    )
}
export default Features