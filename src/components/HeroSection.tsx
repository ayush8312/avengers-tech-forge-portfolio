import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from './ParticleBackground';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const heroTexts = [
    "INITIALIZING...",
    "TECH AVENGER ONLINE",
    "AYUSH MISHRA"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (textIndex < heroTexts.length - 1) {
      const timer = setTimeout(() => {
        setTextIndex(textIndex + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [textIndex, heroTexts.length]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />
      
      <ParticleBackground />
      
      {/* Arc Reactor Center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-32 rounded-full bg-primary/20 arc-reactor-glow flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/40 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-primary" />
          </div>
        </div>
      </div>

      <div className={`relative z-10 text-center transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        {/* Animated Name */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-orbitron font-black hero-text-glow tracking-wider">
            {heroTexts[textIndex]}
          </h1>
          <div className="h-2 bg-primary rounded-full w-64 mx-auto mt-4 animate-pulse" />
        </div>

        {/* Tagline */}
        {textIndex === heroTexts.length - 1 && (
          <div className="space-y-4 animate-fade-in">
            <p className="text-xl md:text-2xl font-rajdhani text-primary font-semibold">
              SOFTWARE DEVELOPER | ML ENGINEER | TECH INNOVATOR
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building the future with code, one algorithm at a time. 
              Specialized in Python, JavaScript, Machine Learning, and scalable applications.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2 text-accent">
                <Mail className="w-4 h-4" />
                <span>31860csaiml@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Phone className="w-4 h-4" />
                <span>+91 7275514139</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                size="lg" 
                className="power-button font-orbitron font-bold px-8 py-4 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                INITIATE CONTACT
              </Button>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="holographic"
                  onClick={() => window.open('https://github.com/ayush8312', '_blank')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GITHUB
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="holographic"
                  onClick={() => window.open('https://www.linkedin.com/in/ayush-mishra-4a9a8a185', '_blank')}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LINKEDIN
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      {textIndex === heroTexts.length - 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-primary hover:text-accent"
          >
            <span className="text-sm font-orbitron">SCROLL TO EXPLORE</span>
            <ChevronDown className="w-6 h-6" />
          </Button>
        </div>
      )}
    </section>
  );
};