'use client';

import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';

export function ComingSoon() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div className="w-full py-20 flex flex-col items-center justify-center">
      {/* Loader Animation */}
      <div className="relative w-24 h-24 mb-8">
        <div className={`absolute inset-0 rounded-full border-4 border-t-primary-500 
          ${theme === 'dark' ? 'border-neutral-700' : 'border-neutral-200'}
          animate-spin`} 
        />
        <div className={`absolute inset-2 rounded-full border-4 border-t-primary-400 
          ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-100'}
          animate-spin-slow`} 
        />
        <div className={`absolute inset-4 rounded-full border-4 border-t-primary-300 
          ${theme === 'dark' ? 'border-neutral-900' : 'border-neutral-50'}
          animate-spin-slower`} 
        />
      </div>

      {/* Text */}
      <h2 className={`text-3xl font-bold mb-4 ${
        theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
      }`}>
        {language === 'ar' ? 'قريباً' : 'Coming Soon'}
      </h2>
      <p className={`text-lg text-center max-w-md ${
        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
      }`}>
        {language === 'ar' 
          ? 'المزيد من الشهادات والدورات التدريبية في الطريق. ترقبونا!'
          : 'More certificates and training courses are on the way. Stay tuned!'}
      </p>
    </div>
  );
}
