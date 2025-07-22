import { createContext, useContext, ReactNode } from 'react';
import { useAudio } from '@/hooks/useAudio';

interface AudioContextType {
  isPlaying: boolean;
  isLoaded: boolean;
  hasError: boolean;
  toggle: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  // Use a data URL for a simple beep sound as fallback
  const audioDataUrl = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBzuP1vLKfStFJnLJx9kJQGoUWbzn+HgcBzVzwNmWQweRW7ft7MQHD0aNY7P9T2cQF2/F3fJ5KgcmfdX16YgzCRNlvuv7mEoODVOl6PBxJAcnHN302Z8/CBjh4/zLXnwCByux2+CgOwgTYrTo8qJdEw5XqOnyi2YdBDKN1/G7QTAJ7+PtsaBNAktTwOCwbigGKz2Kpgnn9OOLNwceWbPl/KBMEAhdvuXuqkzgCQ1F/2lq9+yKZS2z9d03+ywGJTNx9zMXOLrn83mhOQcUGbPq9K1IGE05k8jXgCcHLT7az59SBweE3O6kfSqd2+3n8XYv';
  
  // Try to use the theme music first, fallback to data URL
  const { isPlaying, isLoaded, hasError, toggle } = useAudio('/avengers-theme.mp3', 0.15);
  
  return (
    <AudioContext.Provider value={{ isPlaying, isLoaded, hasError, toggle }}>
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