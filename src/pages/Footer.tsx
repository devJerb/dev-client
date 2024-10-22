import { Linkedin, Twitter, Github } from "lucide-react";

interface Connections {
  name: string;
  link: string;
  icon: JSX.Element;
}

export default function Footer() {
  const connections: Record<string, Connections> = {
    linkedin: {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/gutierrezjerome",
      icon: <Linkedin className="w-5 h-5" />,
    },
    github: {
      name: "GitHub",
      link: "https://github.com/devJerb",
      icon: <Github className="w-5 h-5" />,
    },
    twitter: {
      name: "Twitter",
      link: "https://twitter.com/jerboiiii",
      icon: <Twitter className="w-5 h-5" />,
    },
  };

  return (
    <footer className="bg-gray-950 text-white py-12 px-4 md:px-6 text-center">
      <div className="container mx-auto">
        <div>
          {Object.entries(connections).map(([key, connection]) => (
            <a
              key={key}
              href={connection.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mx-3 hover:text-gray-200 mb-7"
            >
              {connection.icon}
            </a>
          ))}
        </div>
        <p className="text-sm mb-[-20px]">
          &copy; {new Date().getFullYear()} All rights definitely reserved.
        </p>
      </div>
    </footer>
  );
}
