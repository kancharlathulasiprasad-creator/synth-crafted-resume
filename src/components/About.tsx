import { Code2, Brain, Users, MessageSquare, Lightbulb, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const technicalSkills = [
    { name: "C", icon: Code2 },
    { name: "Python", icon: Code2 },
    { name: "HTML/CSS", icon: Code2 },
    { name: "JavaScript", icon: Code2 },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Brain },
    { name: "Teamwork", icon: Users },
    { name: "Communication", icon: MessageSquare },
    { name: "Creativity", icon: Lightbulb },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 hover-lift animate-slide-up">
            <Target className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate B.Tech Computer Science Engineering student with a deep interest in 
              cutting-edge technologies. My journey in tech is driven by curiosity and a desire to 
              create impactful solutions that make a difference. I believe in continuous learning 
              and pushing the boundaries of what's possible with code.
            </p>
          </Card>

          <Card className="p-8 hover-lift animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Brain className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in AI development, web technologies, and problem-solving through code. 
              Whether it's building intelligent systems, creating responsive web applications, or 
              tackling complex algorithmic challenges, I bring dedication and innovation to every project.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <Card key={index} className="p-4 hover-lift flex items-center gap-3">
                  <skill.icon className="h-6 w-6 text-primary" />
                  <span className="font-medium">{skill.name}</span>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <Card key={index} className="p-4 hover-lift flex items-center gap-3">
                  <skill.icon className="h-6 w-6 text-primary" />
                  <span className="font-medium">{skill.name}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
