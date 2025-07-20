import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, Zap, Shield, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from './ParticleBackground';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [activePower, setActivePower] = useState<string | null>(null);
  const [hulkMode, setHulkMode] = useState(false);
  
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
                className="power-button font-orbitron font-bold px-8 py-4 text-lg iron-repulsor"
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

            {/* Avengers Power Controls */}
            <div className="mt-12 space-y-6">
              <p className="text-sm font-orbitron text-accent opacity-80">
                [ AVENGERS PROTOCOL ACTIVATED ]
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {/* Iron Man Repulsor */}
                <Button
                  variant="outline"
                  size="sm"
                  className={`avenger-power-up iron-repulsor ${activePower === 'ironman' ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => {
                    setActivePower(activePower === 'ironman' ? null : 'ironman');
                    document.body.style.background = activePower === 'ironman' 
                      ? 'var(--gradient-hero)' 
                      : 'linear-gradient(135deg, hsl(195 100% 10%) 0%, hsl(220 25% 8%) 50%, hsl(195 100% 15%) 100%)';
                  }}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  REPULSORS
                </Button>

                {/* Hulk Smash */}
                <Button
                  variant="outline"
                  size="sm"
                  className={`hulk-smash ${hulkMode ? 'ring-2 ring-green-500' : ''}`}
                  style={{ 
                    color: hulkMode ? 'hsl(var(--hulk-green))' : ''
                  }}
                  onClick={() => {
                    setHulkMode(!hulkMode);
                    document.body.style.animation = hulkMode ? 'none' : 'ground-shake 0.8s ease-in-out';
                    setTimeout(() => document.body.style.animation = 'none', 800);
                  }}
                >
                  💪 HULK MODE
                </Button>

                {/* Thor Lightning */}
                <Button
                  variant="outline"
                  size="sm"
                  className={`thor-lightning ${activePower === 'thor' ? 'ring-2 ring-yellow-400' : ''}`}
                  onClick={() => {
                    setActivePower(activePower === 'thor' ? null : 'thor');
                    if (activePower !== 'thor') {
                      // Lightning effect
                      const lightning = document.createElement('div');
                      lightning.className = 'fixed inset-0 pointer-events-none z-50';
                      lightning.style.background = 'radial-gradient(circle, hsl(60 100% 80% / 0.3) 0%, transparent 70%)';
                      lightning.style.animation = 'lightning-flicker 0.2s ease-in-out 3';
                      document.body.appendChild(lightning);
                      setTimeout(() => document.body.removeChild(lightning), 600);
                    }
                  }}
                >
                  ⚡ MJOLNIR
                </Button>

                {/* Cap Shield */}
                <Button
                  variant="outline"
                  size="sm"
                  className={`shield-throw ${activePower === 'cap' ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setActivePower(activePower === 'cap' ? null : 'cap')}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  SHIELD
                </Button>

                {/* Hawkeye Precision */}
                <Button
                  variant="outline"
                  size="sm"
                  className={`hawkeye-precision ${activePower === 'hawkeye' ? 'ring-2 ring-purple-500' : ''}`}
                  onClick={() => setActivePower(activePower === 'hawkeye' ? null : 'hawkeye')}
                >
                  <Target className="w-4 h-4 mr-2" />
                  PRECISION
                </Button>

                {/* Widow Stealth */}
                <Button
                  variant="outline"
                  size="sm"
                  className={`widow-stealth ${activePower === 'widow' ? 'ring-2 ring-red-500' : ''}`}
                  onClick={() => {
                    setActivePower(activePower === 'widow' ? null : 'widow');
                    if (activePower !== 'widow') {
                      document.querySelector('section')?.style.setProperty('opacity', '0.7');
                      setTimeout(() => {
                        document.querySelector('section')?.style.setProperty('opacity', '1');
                      }, 500);
                    }
                  }}
                >
                  🕷️ STEALTH
                </Button>
              </div>

              {/* Power Status Display */}
              {activePower && (
                <div className="mt-6 p-4 border border-primary/30 rounded-lg bg-card/50 backdrop-blur-sm animate-fade-in">
                  <p className="text-sm font-orbitron text-primary">
                    {activePower === 'ironman' && '[ REPULSOR ARRAY ONLINE - ARC REACTOR AT 100% ]'}
                    {activePower === 'thor' && '[ MJOLNIR RESPONDING - ASGARDIAN POWER DETECTED ]'}
                    {activePower === 'cap' && '[ VIBRANIUM SHIELD READY - TACTICAL ADVANTAGE ACHIEVED ]'}
                    {activePower === 'hawkeye' && '[ ENHANCED TARGETING SYSTEMS ACTIVE ]'}
                    {activePower === 'widow' && '[ STEALTH PROTOCOLS ENGAGED - GHOST MODE ACTIVE ]'}
                  </p>
                </div>
              )}

              {hulkMode && (
                <div className="mt-4 p-4 border-2 border-green-500 rounded-lg bg-green-500/10 animate-fade-in">
                  <p className="text-sm font-orbitron text-green-400 hulk-smash">
                    [ HULK SMASH ACTIVATED - GAMMA RADIATION LEVELS: EXTREME ]
                  </p>
                </div>
              )}
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