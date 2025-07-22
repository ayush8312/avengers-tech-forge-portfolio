import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { useAudioContext } from './AudioManager';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const { isPlaying, toggle: toggleAudio } = useAudioContext();

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'PROFILE' },
    { id: 'projects', label: 'MISSIONS' },
    { id: 'certifications', label: 'BADGES' },
    { id: 'contact', label: 'CONTACT' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };


  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-primary/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center arc-reactor-glow">
                <div className="w-6 h-6 rounded-full bg-primary" />
              </div>
              <span className="font-orbitron font-bold text-primary text-xl">AYUSH MISHRA</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-rajdhani font-semibold text-sm tracking-wider transition-all duration-300 hover:text-primary ${
                    activeSection === item.id 
                      ? 'text-primary border-b-2 border-primary pb-1' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Audio Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleAudio}
                className="text-muted-foreground hover:text-primary"
              >
                {!isPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleAudio}
                className="text-muted-foreground hover:text-primary"
              >
                {!isPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted-foreground hover:text-primary"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-primary/20">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left font-rajdhani font-semibold text-lg tracking-wider transition-all duration-300 hover:text-primary py-2 ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Floating Action Button for Quick Contact */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button
          size="lg"
          className="power-button rounded-full w-14 h-14 shadow-2xl"
          onClick={() => scrollToSection('contact')}
        >
          <span className="font-orbitron font-bold text-xl">!</span>
        </Button>
      </div>
    </>
  );
};