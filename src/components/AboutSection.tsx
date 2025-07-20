import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Code, Brain } from 'lucide-react';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const techStack = {
    languages: ['Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'React'],
    databases: ['MySQL', 'PostgreSQL'],
    tools: ['Linux/Unix', 'MS Excel', 'Tableau', 'PowerBI'],
    concepts: ['OOPs', 'Data Structures & Algorithms'],
    skills: ['Communication', 'Analytical Thinking']
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-orbitron font-bold hero-text-glow mb-4">
            TECH AVENGER PROFILE
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Card */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Card className="holographic tech-card p-8 h-full">
              <CardContent className="space-y-6">
                {/* Profile Avatar */}
                <div className="relative mx-auto w-48 h-48 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary animate-spin" 
                       style={{ animationDuration: '8s' }} />
                  <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
                    <div className="text-6xl font-orbitron font-black text-primary">AM</div>
                  </div>
                  <Shield className="absolute top-2 right-2 w-8 h-8 text-accent" />
                </div>

                {/* Profile Info */}
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-orbitron font-bold stark-gold-glow">
                    AYUSH MISHRA
                  </h3>
                  <div className="flex justify-center">
                    <Badge className="bg-primary/20 text-primary border-primary px-4 py-2 text-lg">
                      SOFTWARE DEVELOPER
                    </Badge>
                  </div>
                </div>

                {/* Mission Statement */}
                <div className="space-y-4 text-center">
                  <div className="flex justify-center">
                    <Zap className="w-6 h-6 text-accent mr-2" />
                    <span className="text-accent font-semibold">MISSION BRIEFING</span>
                    <Zap className="w-6 h-6 text-accent ml-2" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Software developer with practical experience in building scalable applications 
                    using Python and JavaScript. Passionate about clean code, debugging, DSA, 
                    and AI/ML projects. Ready to defend the digital realm with cutting-edge technology.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tech Arsenal */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <Card className="jarvis-panel tech-card p-8 h-full">
              <CardContent className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-orbitron font-bold text-primary mb-2">
                    TECH ARSENAL
                  </h3>
                  <div className="flex justify-center">
                    <Code className="w-6 h-6 text-accent" />
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Languages */}
                  <div>
                    <h4 className="text-lg font-semibold text-accent mb-3 flex items-center">
                      <span className="w-3 h-3 bg-accent rounded-full mr-2" />
                      LANGUAGES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.languages.map((tech, index) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="border-primary/50 text-primary hover:bg-primary/20 transition-all duration-300"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Databases */}
                  <div>
                    <h4 className="text-lg font-semibold text-accent mb-3 flex items-center">
                      <span className="w-3 h-3 bg-accent rounded-full mr-2" />
                      DATABASES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.databases.map((tech, index) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="border-primary/50 text-primary hover:bg-primary/20 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-lg font-semibold text-accent mb-3 flex items-center">
                      <span className="w-3 h-3 bg-accent rounded-full mr-2" />
                      TOOLS & FRAMEWORKS
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.tools.map((tech, index) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="border-primary/50 text-primary hover:bg-primary/20 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Concepts */}
                  <div>
                    <h4 className="text-lg font-semibold text-accent mb-3 flex items-center">
                      <Brain className="w-4 h-4 mr-2" />
                      CORE CONCEPTS
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.concepts.map((tech, index) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="border-accent/50 text-accent hover:bg-accent/20 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Soft Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-accent mb-3 flex items-center">
                      <span className="w-3 h-3 bg-accent rounded-full mr-2" />
                      SOFT SKILLS
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.skills.map((skill, index) => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          className="border-accent/50 text-accent hover:bg-accent/20 transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};