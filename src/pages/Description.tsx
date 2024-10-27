import Nibbles from "../assets/videos/nibbles.mp4";
import Video from "../components/ui/Video";

const Description = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 items-center">
        <Video videoSrc={Nibbles} />
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tighter md:text-6xl bg-clip-text text-gray-900">
            Full Stack & LLMs
          </h1>
          <div className="text-xl text-gray-900 space-y-6">
            <p>
              As an AI Engineer with a strong background in computer science, I
              specialize in developing and optimizing large language models for
              production environments, with a focus on enhancing performance and
              efficiency.
            </p>
            <p>
              My experience spans across implementing RAG pipelines, deploying
              machine learning models, and creating data processing workflows
              for complex datasets, particularly in the legal domain.
            </p>
            <p>
              I bring full-stack development skills to the table, allowing me to
              build comprehensive AI-driven solutions from front-end interfaces
              to backend systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
