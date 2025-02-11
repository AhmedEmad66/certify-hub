'use client';

import { useTheme } from './ThemeProvider';
import { FiMoon, FiSun } from 'react-icons/fi';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-primary-500/10 transition-colors"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <FiSun className="w-5 h-5 text-primary-400" />
      ) : (
        <FiMoon className="w-5 h-5 text-primary-600" />
      )}
    </button>
  );
}
