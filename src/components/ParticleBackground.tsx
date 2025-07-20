import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          duration: Math.random() * 10 + 10,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      
      {/* Additional Floating Tech Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-accent/50 rounded-full animate-pulse opacity-30" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-primary/70 rounded-full animate-pulse opacity-50" 
           style={{ animationDelay: '0.5s' }} />
    </div>
  );
};