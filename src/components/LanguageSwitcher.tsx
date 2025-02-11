'use client';

import { useLanguage } from './LanguageProvider';
import { FiGlobe } from 'react-icons/fi';

export function LanguageSwitcher() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-colors"
      aria-label={t('toggleLanguage')}
    >
      <FiGlobe className="w-5 h-5" />
      <span>{language.toUpperCase()}</span>
    </button>
  );
}
