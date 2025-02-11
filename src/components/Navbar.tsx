'use client';

import { useLanguage } from './LanguageProvider';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { FiMessageCircle } from 'react-icons/fi';
import { useTheme } from './ThemeProvider';
// import Link from 'next/link';

export function Navbar() {
  // const { t, direction } = useLanguage();
  const { theme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Blur effect background */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-primary-200/20" />
      
      {/* Navbar content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold transition-all duration-300 ${
              theme === 'dark' 
                ? 'text-primary-400 text-glow' 
                : 'text-primary-600'
            }`}>
              Certify
            </h1>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
            
            {/* Telegram link */}
            <a
              href="https://t.me/Abn3mad"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'hover:bg-primary-400/20 text-primary-400'
                  : 'hover:bg-primary-600/20 text-primary-600'
              }`}
              aria-label="Telegram"
            >
              <FiMessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
