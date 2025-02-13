'use client';

import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";
import { FiArrowRight } from 'react-icons/fi';
import { CertificateGrid } from "@/components/CertificateGrid";
import { RiTelegram2Fill } from "react-icons/ri";


export default function Home() {
  const { t, direction } = useLanguage();
  const { theme } = useTheme();

  return (
    <>
      <main className={`min-h-screen pt-16 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        </div>

        {/* Banner Section */}
        <section className={`relative overflow-hidden py-12 sm:py-20 transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-b from-primary-500/20 to-transparent'
            : 'bg-gradient-to-b from-primary-500/10 to-transparent'
        }`}>
          {/* Animated grid background */}
          <div className="absolute inset-0 bg-grid-primary-500/[0.03] bg-[size:20px_20px] animate-[grid_20s_linear_infinite]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex-shrink-0 mb-4">
                <h2 className={`text-lg sm:text-xl font-bold transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'text-primary-400 text-glow' 
                    : 'text-primary-600'
                }`}>
                  {t('discount')}
                </h2>
              </div>

              {/* Animated Main Heading */}
              <h1 className={`text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 animate-fade-in-up transition-colors duration-300 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent'
              }`}>
                {t('moreOffers')}
              </h1>

              {/* Contact Button with Label */}
              <div className="flex flex-col items-center gap-3 sm:gap-4 animate-fade-in-up [animation-delay:200ms]">
                {/* Button Container */}
                <div className="w-full sm:w-auto">
                  <a
                    href="https://t.me/Abn3mad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full 
                      w-full sm:w-auto transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-primary-400 text-black hover:bg-primary-300'
                        : 'bg-primary-600 text-white hover:bg-primary-700'
                      } active:scale-95 hover:scale-100 sm:hover:scale-105`}
                  >
                    <RiTelegram2Fill className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-medium">{t('contactOnTelegram')}</span>
                    <FiArrowRight className={`w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 transition-transform duration-300 ${
                      direction === 'rtl' 
                        ? '-scale-x-100 group-hover:-translate-x-1' 
                        : 'group-hover:translate-x-1'
                    }`} />
                  </a>
                </div>
              </div>
            </div>

            {/* Animated Decorative Elements */}
            <div className={`absolute top-1/2 left-0 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 rounded-full 
              filter blur-3xl opacity-20 animate-pulse ${
              theme === 'dark' ? 'bg-primary-400/30' : 'bg-primary-600/30'
            }`} />
            <div className={`absolute top-1/2 right-0 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 rounded-full 
              filter blur-3xl opacity-20 animate-pulse [animation-delay:1000ms] ${
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
