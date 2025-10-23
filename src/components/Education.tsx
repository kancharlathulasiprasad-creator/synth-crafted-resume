import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Your College Name",
      period: "2021 - Present",
      description: "Specializing in AI, Machine Learning, and Web Development",
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "Your School Name",
      period: "2019 - 2021",
      description: "Mathematics, Physics, Chemistry with distinction",
    },
    {
      degree: "Secondary School Certificate (Class X)",
      institution: "Your School Name",
      period: "2018 - 2019",
      description: "Graduated with honors and academic excellence",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
