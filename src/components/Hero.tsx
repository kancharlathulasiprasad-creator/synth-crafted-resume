import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-hero">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Aspiring Software Engineer & Tech Enthusiast
            </p>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              B.Tech Computer Science student passionate about creating innovative solutions 
              through AI, Web Development, and Problem Solving.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection("projects")} 
                size="lg"
                className="group"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                variant="outline" 
                size="lg"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:your.email@example.com"
                className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="animate-fade-in flex justify-center">
            <img 
              src={heroAvatar} 
              alt="Professional Avatar" 
              className="rounded-2xl shadow-lg w-full max-w-md hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
