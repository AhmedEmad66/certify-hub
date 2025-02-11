'use client';

import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";
import { FiMessageCircle, FiArrowRight } from 'react-icons/fi';
import { CertificateGrid } from "@/components/CertificateGrid";

export default function Home() {
  const { t, direction } = useLanguage();
  const { theme } = useTheme();

  return (
    <>
      
      <main className={`min-h-screen pt-16 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        </div>

        {/* Banner Section */}
        <section className={`relative overflow-hidden py-16 sm:py-24 transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-b from-primary-500/20 to-transparent'
            : 'bg-gradient-to-b from-primary-500/10 to-transparent'
        }`}>
          {/* Animated grid background */}
          <div className="absolute inset-0 bg-grid-primary-500/[0.03] bg-[size:20px_20px] animate-[grid_20s_linear_infinite]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold transition-all duration-300 ${
              theme === 'dark' 
                ? 'text-primary-400 text-glow' 
                : 'text-primary-600'
            }`}>
              {t('discount')}
            </h1>
          </div>
              {/* Animated Main Heading */}
              <h1 className={`text-4xl sm:text-5xl font-bold mb-8 animate-fade-in-up transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent':'bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent'
              
              }`}>
                {t('moreOffers')}
              </h1>

              {/* Contact Button with Label */}
              <div className="flex flex-col items-center gap-4 animate-fade-in-up [animation-delay:200ms]">
                <p className={`text-lg font-medium ${
                  theme === 'dark' ? 'text-primary-300' : 'text-primary-700'
                }`}>
                </p>
                <a
                  href="https://t.me/Abn3mad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-primary-400 text-black hover:bg-primary-300'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  } transform hover:scale-105`}
                >
                  <FiMessageCircle className="w-5 h-5" />
                  <span>{t('contactOnTelegram')}</span>
                  <FiArrowRight className={`w-4 h-4 transition-transform ${
                    direction === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                  }`} />
                </a>
              </div>
            </div>

            {/* Animated Decorative Elements */}
            <div className={`absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full filter blur-3xl opacity-20 animate-pulse ${
              theme === 'dark' ? 'bg-primary-400/30' : 'bg-primary-600/30'
            }`} />
            <div className={`absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 rounded-full filter blur-3xl opacity-20 animate-pulse [animation-delay:1000ms] ${
              theme === 'dark' ? 'bg-primary-600/30' : 'bg-primary-800/30'
            }`} />
          </div>
        </section>

        {/* Certificates Grid */}
        <CertificateGrid />
      </main>
    </>
  );
}
