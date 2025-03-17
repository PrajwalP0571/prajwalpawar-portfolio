
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  texts, 
  className,
  interval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState('animate-fade-in');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimation('animate-fade-out');
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setAnimation('animate-fade-in');
      }, 500); // This timing should match your fade-out animation duration
      
    }, interval);

    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return (
    <span className={cn(animation, "inline-block transition-opacity duration-500", className)}>
      {texts[currentIndex]}
    </span>
  );
};

export default AnimatedText;
