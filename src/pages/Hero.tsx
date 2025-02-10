import { ArrowRight } from "lucide-react";

import Video from "../components/ui/Video";
import Button from "../components/ui/Button";
// import Bytes from "../assets/videos/bytes.mp4";
import Nibbles from "../assets/videos/nibbles.mp4";
// import Divider from "../components/ui/Divider";

export default function Hero() {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          {/* <Divider /> */}
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl bg-clip-text text-gray-900">
            CS Full Stack AI Engineer
          </h1>
          <p className="text-xl text-gray-900 max-w-lg">
            Bridging gaps between AI and full stack; scalable and intelligent
            solutions.
          </p>
          <Button
            className="group bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 font-mono"
            onClick={handleScrollToProjects}
          >
            EXPLORE PROJECTS
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <Video videoSrc={Nibbles} />
      </div>
    </div>
  );
}
