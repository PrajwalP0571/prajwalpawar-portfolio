
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  
  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && 
      window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);
  
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };
  
  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-full transition-colors hover:bg-secondary"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon size={20} className="animate-fade-in" />
      ) : (
        <Sun size={20} className="animate-fade-in" />
      )}
    </button>
  );
};

export default ThemeToggle;
