import { GithubIcon, Heart, TwitterIcon } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bottom-0  w-full flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm text-white py-6 md:py-8">
            <div className="flex items-center gap-2 font-bold text-sm md:text-lg">
                Built with <Heart className="text-red-500 h-4 w-4 md:h-5 md:w-5 " fill="currentColor" /> by Tanishq Sethi
            </div>

            <div className="flex items-center gap-4 mt-4">
                <a
                    href="https://x.com/TanishqSethi13"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <TwitterIcon className="h-5 w-5 md:h-6 md:w-6" />
                </a>
                <a
                    href="https://github.com/iamtanishqsethi"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <GithubIcon className="h-5 w-5 md:h-6 md:w-6" />
                </a>
            </div>

            <div className="mt-4 text-xs text-gray-400">
                © {new Date().getFullYear()} All rights reserved
            </div>
        </footer>
    );
};

export default Footer;