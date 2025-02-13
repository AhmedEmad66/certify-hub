'use client';

import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { RiTelegram2Fill } from "react-icons/ri";

export function Footer() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full py-6 ${
      theme === 'dark' ? 'bg-neutral-950' : 'bg-neutral-50'
    }`}>
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col items-center gap-4">
          {/* Contact Section */}
          <div className="flex items-center gap-2">
            <span className={`text-sm ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              {t('contactUs')}:
            </span>
            <a
              href="https://t.me/Abn3mad"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs
                transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-primary-400/10 text-primary-400 hover:bg-primary-400/20'
                  : 'bg-primary-600/10 text-primary-600 hover:bg-primary-600/20'
              }`}
            >
              <RiTelegram2Fill className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>
          </div>

          {/* Copyright */}
          <div className={`text-xs ${
            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
          }`}>
            © {currentYear} Certify. {t('allRightsReserved')}
          </div>
        </div>
      </div>
    </footer>
  );
}
