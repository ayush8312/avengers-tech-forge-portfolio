import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Shield, Zap } from 'lucide-react';

export const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Autism Spectrum Disorder Prediction',
      description: 'Advanced ML system achieving 92% accuracy using supervised learning models with comprehensive data preprocessing and automated pipeline.',
      icon: Brain,
      tech: ['Python', 'TensorFlow', 'Machine Learning', 'JavaScript', 'React'],
      achievements: [
        '92% prediction accuracy',
        'PCA & correlation analysis',
        'Automated ML pipeline',
        'Reusable Python scripts'
      ],
      githubUrl: 'https://github.com/ayush8312',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Data Hiding using Steganography',
      description: 'Secure GUI application for hiding text in images using LSB encoding with high image quality preservation and encryption.',
      icon: Shield,
      tech: ['Python', 'Tkinter', 'LSB Encoding', 'Cryptography'],
      achievements: [
        'SSIM > 0.95 quality retention',
        'User-friendly GUI interface',
        'Strong encryption security',
        'Image preservation techniques'
      ],
      githubUrl: 'https://github.com/ayush8312',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Network Intrusion Detection System',
      description: 'Real-time cybersecurity system detecting SQL injection and DDoS attacks with 94% accuracy and automated alert mechanisms.',
      icon: Zap,
      tech: ['Python', 'Pandas', 'SVM', 'NSL-KDD', 'Scapy'],
      achievements: [
        '94% detection accuracy',
        'Real-time packet monitoring',
        '40% faster response time',
        'Automated alert system'
      ],
      githubUrl: 'https://github.com/ayush8312',
      gradient: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-orbitron font-bold hero-text-glow mb-4">
            MISSION ARCHIVES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Successful operations and technological breakthroughs in the field
          </p>
          <div className="w-32 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className={`transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card className={`tech-card holographic h-full perspective-1000 ${
                  hoveredProject === project.id ? 'scale-105' : ''
                } transition-all duration-500`}>
                  {/* Project Header */}
                  <CardHeader className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-orbitron font-bold text-primary mb-2">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="p-2 rounded-full bg-primary/20">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <span className="text-accent font-semibold">ACTIVE PROJECT</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Holographic Scan Line */}
                    {hoveredProject === project.id && (
                      <div className="absolute inset-0 opacity-30">
                        <div className="h-full w-1 bg-primary animate-pulse" 
                             style={{ 
                               animation: 'scan-line 2s linear infinite',
                               background: 'linear-gradient(to bottom, transparent, hsl(var(--primary)), transparent)'
                             }} />
                      </div>
                    )}
                  </CardHeader>

                  {/* Project Content */}
                  <CardContent className="space-y-6">
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
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

                    {/* Key Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button 
                        size="sm" 
                        className="power-button flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        CODE
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="holographic"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* View More Projects */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Button 
            size="lg" 
            variant="outline"
            className="holographic font-orbitron font-bold px-8 py-4"
            onClick={() => window.open('https://github.com/ayush8312', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            VIEW ALL MISSIONS
          </Button>
        </div>
      </div>

    </section>
  );
};