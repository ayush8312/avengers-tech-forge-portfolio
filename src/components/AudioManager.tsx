import { createContext, useContext, ReactNode } from 'react';
import { useAudio } from '@/hooks/useAudio';

interface AudioContextType {
  isPlaying: boolean;
  isLoaded: boolean;
  toggle: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const { isPlaying, isLoaded, toggle } = useAudio('/hero-theme.mp3', 0.2);

  return (
    <AudioContext.Provider value={{ isPlaying, isLoaded, toggle }}>
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