import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

function ThemeToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleThemeChange = (newTheme) => {
    toggleTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-primary-light p-2"
      >
        {theme === 'dark' ? <FaMoon /> : <FaSun />}
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 z-50">
          <button
            onClick={() => handleThemeChange('light')}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded flex items-center gap-2"
          >
            <FaSun /> Light Mode
          </button>
          <button
            onClick={() => handleThemeChange('dark')}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded flex items-center gap-2"
          >
            <FaMoon /> Dark Mode
          </button>
        </div>
      )}
    </div>
  );
}

export default ThemeToggle;