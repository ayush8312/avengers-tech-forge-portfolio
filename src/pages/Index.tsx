import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Add reveal animation to elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all elements with reveal-on-scroll class
    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    elementsToReveal.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="about" className="reveal-on-scroll">
          <AboutSection />
        </div>
        
        <div id="projects" className="reveal-on-scroll">
          <ProjectsSection />
        </div>
        
        <div id="certifications" className="reveal-on-scroll">
          <CertificationsSection />
        </div>
        
        <div id="contact" className="reveal-on-scroll">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-primary/20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center arc-reactor-glow">
              <div className="w-4 h-4 rounded-full bg-primary" />
            </div>
            <span className="font-orbitron font-bold text-primary">AYUSH MISHRA</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Ayush Mishra. All rights reserved. | Powered by React & Modern Web Technologies
          </p>
          <p className="text-accent text-xs mt-2 font-rajdhani">
            "With great code comes great responsibility" - Tech Avenger
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
