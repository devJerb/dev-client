import { useState, useEffect } from "react";
import { Input } from "../components/ui/Input";
import { Notify } from "../components/ui/Notify";
import { Textarea } from "../components/ui/Textarea";
import { Card, CardContent } from "../components/ui/Card";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

import axios from "axios";
import Button from "../components/ui/Button";

interface Connections {
  name: string;
  link: string;
  icon: JSX.Element;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification(null);

    try {
      const endpoint = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(`${endpoint}/api/contact`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status == 200) {
        setNotification({
          message: "Your message has been sent successfully.",
          type: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(`Error submitting form, ${err}`);
      setNotification({
        message: "There was a problem sending your message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container min-h-screen mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2">Contact Me</h1>
      <p className="text-center text-muted-foreground mb-8">
        If any of these services potentially suffice your needs. Let's make your
        idea a non-convoluted reality.
      </p>
      {notification && (
        <Notify message={notification.message} type={notification.type} />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows={4}
                  className="max-h-80 min-h-20 overflow-y-auto"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>gutierrez.jeromebryant@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>+63 949 146 8933</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Pampanga, PH</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
              <div className="flex space-x-4">
                {Object.entries(connections).map(([key, connection]) => (
                  <a
                    key={key}
                    href={connection.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    {connection.icon}
                    <span className="sr-only">{connection.name}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
