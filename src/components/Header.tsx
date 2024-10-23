"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Brain, Signature } from "lucide-react";

import Button from "./ui/Button";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "/" },
    { name: "Notebooks", href: "https://www.kaggle.com/jeromelgutierrez" },
    { name: "Blog", href: "https://hashnode.com/@devJerb" },
  ];

  return (
    <header
      className={`${className} sticky top-0 z-100 transition-all duration-200 font-mono ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8" />
              <span className="text-2xl font-bold">devJerb</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-4 font-sans">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className="relative text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-md font-medium group scroll-smooth"
              >
                <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300 group-hover:after:w-full group-active:after:w-full">
                  {item.name.toUpperCase()}
                </span>
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              className="hidden sm:inline-flex"
              variant="primary"
              onClick={() => navigate("/contact")}
            >
              CONTACT ME
              <Signature className="h-4 w-4 ml-2" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium scroll-smooth font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4" onClick={() => navigate("/contact")}>
              CONTACT ME
              <Signature className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
