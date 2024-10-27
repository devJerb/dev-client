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
  },
};
