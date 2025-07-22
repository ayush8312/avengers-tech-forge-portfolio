import { useState, useEffect, useRef } from 'react';

export const useAudio = (src: string, volume: number = 0.3) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    audioRef.current.preload = 'metadata';
    
    const audio = audioRef.current;
    
    const handleCanPlayThrough = () => {
      setIsLoaded(true);
      setHasError(false);
      console.log('Audio loaded successfully');
    };
    
    const handleError = () => {
      setHasError(true);
      setIsLoaded(false);
      console.warn('Audio failed to load:', src);
    };
    
    const handleEnded = () => setIsPlaying(false);
    
    // Add event listeners
    audio.addEventListener('canplaythrough', handleCanPlayThrough);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);
    
    // Try to load the audio source
    try {
      audio.src = src;
      audio.load();
    } catch (error) {
      console.warn('Failed to set audio source:', error);
      setHasError(true);
    }
    
    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
    };
  }, [src, volume]);

  const play = async () => {
    if (audioRef.current && isLoaded && !hasError) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        console.log('Audio playing');
      } catch (error) {
        console.warn('Audio play failed:', error);
        setHasError(true);
      }
    } else {
      console.warn('Audio not ready:', { isLoaded, hasError });
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      console.log('Audio paused');
    }
  };

  const toggle = () => {
    console.log('Toggle audio:', { isPlaying, isLoaded, hasError });
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return { isPlaying, isLoaded, hasError, play, pause, toggle };
};