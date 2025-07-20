import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink, Star } from 'lucide-react';

export const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
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

  const certifications = [
    {
      id: 1,
      title: 'Cybersecurity Fundamentals',
      provider: 'LinkedIn Learning',
      description: 'Comprehensive cybersecurity principles and practices',
      status: 'Verified',
      icon: '🛡️',
      category: 'Security'
    },
    {
      id: 2,
      title: 'Java Programming',
      provider: 'HackerRank',
      description: 'Advanced Java programming concepts and algorithms',
      status: 'Certified',
      icon: '☕',
      category: 'Programming'
    },
    {
      id: 3,
      title: 'Python Development',
      provider: 'HackerRank',
      description: 'Python programming mastery and best practices',
      status: 'Certified',
      icon: '🐍',
      category: 'Programming'
    },
    {
      id: 4,
      title: 'HTML5 Fundamentals',
      provider: 'SimpliLearn',
      description: 'Modern web development with HTML5 standards',
      status: 'Completed',
      icon: '🌐',
      category: 'Web Development'
    },
    {
      id: 5,
      title: 'JavaScript Essentials',
      provider: 'Infosys',
      description: 'JavaScript programming and modern ES6+ features',
      status: 'Certified',
      icon: '⚡',
      category: 'Programming'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Security':
        return 'border-red-500/50 text-red-400';
      case 'Programming':
        return 'border-blue-500/50 text-blue-400';
      case 'Web Development':
        return 'border-green-500/50 text-green-400';
      default:
        return 'border-accent/50 text-accent';
    }
  };

  return (
    <section id="certifications" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-orbitron font-bold hero-text-glow mb-4">
            ACHIEVEMENT BADGES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Certified expertise and professional accomplishments in the field
          </p>
          <div className="w-32 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              <Card className={`tech-card holographic h-full group ${
                hoveredCert === cert.id ? 'scale-105' : ''
              } transition-all duration-500`}>
                <CardContent className="p-6 space-y-4">
                  {/* Badge Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <div className="text-right">
                      <Badge 
                        variant="outline" 
                        className={`${getCategoryColor(cert.category)} text-xs font-semibold`}
                      >
                        {cert.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-orbitron font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-accent font-semibold text-sm">{cert.provider}</span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      <span className="text-accent font-semibold text-sm">{cert.status}</span>
                    </div>
                    
                    <Star className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>

                  {/* Holographic Overlay Effect */}
                  {hoveredCert === cert.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -skew-x-12 animate-pulse" />
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Card className="jarvis-panel tech-card">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-orbitron font-bold text-primary">5</div>
                  <div className="text-sm text-accent uppercase tracking-wider">Total Certifications</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-orbitron font-bold text-primary">4</div>
                  <div className="text-sm text-accent uppercase tracking-wider">Programming Skills</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-orbitron font-bold text-primary">3</div>
                  <div className="text-sm text-accent uppercase tracking-wider">Platforms</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-orbitron font-bold text-primary">100%</div>
                  <div className="text-sm text-accent uppercase tracking-wider">Completion Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};