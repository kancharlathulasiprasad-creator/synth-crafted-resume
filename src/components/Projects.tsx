import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Student Attendance Management System",
      description: "A comprehensive system to track and manage student attendance with automated reporting, real-time analytics, and user-friendly interface for administrators and students.",
      demo: "#",
      github: "#",
      tags: ["Python", "Database", "UI/UX"],
    },
    {
      title: "Weather Forecasting App",
      description: "Real-time weather application providing accurate forecasts, hourly updates, and 7-day predictions with beautiful visualizations and location-based services.",
      demo: "#",
      github: "#",
      tags: ["JavaScript", "API", "React"],
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive personal portfolio showcasing projects, skills, and experience with smooth animations and professional design built using latest web technologies.",
      demo: "#",
      github: "#",
      tags: ["React", "Tailwind", "TypeScript"],
    },
    {
      title: "AI Chatbot Assistant",
      description: "Intelligent conversational AI assistant with natural language processing capabilities, context awareness, and multi-turn dialogue support for enhanced user interaction.",
      demo: "#",
      github: "#",
      tags: ["Python", "AI/ML", "NLP"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore some of my recent work showcasing my skills in development and problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-secondary text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
