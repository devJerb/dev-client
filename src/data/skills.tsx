import {
  Code,
  Regex,
  Layers,
  Database,
  Server,
  Monitor,
  Cloud,
  Lock,
  BotMessageSquare,
  ScanEye,
  BrainCog,
  Package,
  Activity,
} from "lucide-react";

interface Area {
  name: string;
  icon: JSX.Element;
  techs: string[];
}

interface Skill {
  title: string;
  icon: JSX.Element;
  description: string;
  areas: Area[];
  detail: string;
  keypoints: string[];
}

export const skills: Record<string, Skill> = {
  "full-stack": {
    title: "Web Development",
    icon: <Layers className="w-8 h-8 text-primary" />,
    description:
      "Comprehensive expertise in both frontend and backend technologies.",
    areas: [
      {
        name: "Frontend",
        icon: <Monitor className="w-5 h-5" />,
        techs: ["TypeScript", "React", "Redux"],
      },
      {
        name: "Backend",
        icon: <Server className="w-5 h-5" />,
        techs: ["Node.js", "Python"],
      },
      {
        name: "Database",
        icon: <Database className="w-5 h-5" />,
        techs: ["PostgreSQL", "MongoDB", "MariaDB", "Weaviate"],
      },
      {
        name: "DevOps",
        icon: <Cloud className="w-5 h-5" />,
        techs: ["Docker", "Kubernetes", "CI/CD", "Grafana"],
      },
      {
        name: "Security",
        icon: <Lock className="w-5 h-5" />,
        techs: ["OAuth", "JWT", "HTTPS", "Data Encryption"],
      },
    ],
    detail:
      "Proficiency in both front-end and back-end web development, with experience in modern JavaScript frameworks and server-side technologies. Implemented various web architectures and worked on optimizing web application performance, showcasing their ability to contribute to full-stack development keypoints.",
    keypoints: ["Microservice", "Monolith", "Distributed"],
  },
  "deep-learning": {
    title: "Deep Learning",
    icon: <BrainCog className="w-8 h-8 text-primary" />,
    description:
      "Proficiency in neural networks and advanced deep learning techniques.",
    areas: [
      {
        name: "Frameworks",
        icon: <Code className="w-5 h-5" />,
        techs: ["PyTorch", "TensorFlow", "Keras", "Pandas", "NLTK"],
      },
      {
        name: "Computer Vision",
        icon: <ScanEye className="w-5 h-5" />,
        techs: ["CNN", "YOLO", "DeepSORT", "StrongSORT"],
      },
      {
        name: "NLP",
        icon: <Regex className="w-5 h-5" />,
        techs: ["LSTM", "Transformers", "BERT", "XL-Net"],
      },
      {
        name: "Applications",
        icon: <Activity className="w-h h-5" />,
        techs: ["Legal", "Entertainment", "Music", "Agents"],
      },
    ],
    detail:
      "Implemented complex neural network architectures, including custom YOLOv7 models integrated with BoF and StrongSORT, achieving high mAP scores in object detection and tracking tasks.",
    keypoints: ["Data Structures and Algorithms", "Exploratory Data Analysis"],
  },
  llms: {
    title: "Large Language Models",
    icon: <BotMessageSquare className="w-8 h-8 text-primary" />,
    description:
      "Experience with state-of-the-art language models and their applications.",
    areas: [
      {
        name: "Models",
        icon: <Package className="w-5 h-5" />,
        techs: ["GPT", "Claude", "Mistral", "Llama", "BERT"],
      },
      {
        name: "Techniques",
        icon: <Code className="w-5 h-5" />,
        techs: ["RAG", "CoT", "DSP", "Similarity Search"],
      },
      {
        name: "Frameworks",
        icon: <Monitor className="w-5 h-5" />,
        techs: ["LangChain", "LangGraph", "Chroma", "Agentic"],
      },
      {
        name: "Deployment",
        icon: <Cloud className="w-5 h-5" />,
        techs: ["Model Serving", "API Integration", "Scalability"],
      },
    ],
    detail:
      "Hands-on experience in developing and optimizing production-grade LLM systems, demonstrating proficiency in processing high-volume queries and improving model performance.",
    keypoints: ["Prompt Engineering", "Contextual Retrieval", "Task Queue"],
  },
};
