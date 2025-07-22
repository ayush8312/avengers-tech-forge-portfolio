import { createContext, useContext, ReactNode, useState, useRef, useCallback } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  toggle: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const createHeroicTone = useCallback(() => {
    try {
      // Create audio context if it doesn't exist
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const audioCtx = audioContextRef.current;
      
      // Create oscillator and gain node
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      // Set up a heroic chord progression (C major chord)
      oscillator.frequency.setValueAtTime(261.63, audioCtx.currentTime); // C note
      oscillator.type = 'square';
      
      // Set volume
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      
      // Connect nodes
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      // Store references
      oscillatorRef.current = oscillator;
      gainNodeRef.current = gainNode;
      
      // Start the tone
      oscillator.start();
      
      console.log('Hero tone started');
      return true;
    } catch (error) {
      console.warn('Failed to create audio:', error);
      return false;
    }
  }, []);

  const stopTone = useCallback(() => {
    try {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current = null;
      }
      if (gainNodeRef.current) {
        gainNodeRef.current = null;
      }
      console.log('Hero tone stopped');
    } catch (error) {
      console.warn('Error stopping audio:', error);
    }
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      stopTone();
      setIsPlaying(false);
    } else {
      const success = createHeroicTone();
      if (success) {
        setIsPlaying(true);
        // Auto-stop after 10 seconds to prevent infinite playing
        setTimeout(() => {
          stopTone();
          setIsPlaying(false);
        }, 10000);
      }
    }
  }, [isPlaying, createHeroicTone, stopTone]);

  return (
    <AudioContext.Provider value={{ isPlaying, toggle }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioContext = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudioContext must be used within AudioProvider');
  }
  return context;
};
