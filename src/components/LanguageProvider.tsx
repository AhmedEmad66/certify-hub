'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Language, translations, getDirection, TranslationKey } from '@/utils/translate';

type LanguageContextType = {
  language: Language;
  direction: 'ltr' | 'rtl';
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setDirection(getDirection(savedLanguage));
      document.documentElement.dir = getDirection(savedLanguage);
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'ar' : 'en';
    const newDirection = getDirection(newLanguage);
    
    setLanguage(newLanguage);
    setDirection(newDirection);
    document.documentElement.dir = newDirection;
    document.documentElement.lang = newLanguage;
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
