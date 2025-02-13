'use client';

import { Certificate } from '@/types/certificate';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { FiClock, FiBarChart2, FiPlayCircle } from 'react-icons/fi';

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const { theme } = useTheme();
  const { direction, language } = useLanguage();

  // Get localized content
  const title = language === 'ar' && certificate.titleAr ? certificate.titleAr : certificate.title;
  const description = language === 'ar' && certificate.descriptionAr ? certificate.descriptionAr : certificate.description;

  // Convert Google Drive link to embedded image URL
  const getEmbedUrl = (url: string) => {
    const fileId = url.match(/\/d\/(.*?)\//)![1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

  return (
    <div
      className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-neutral-900/50 hover:bg-neutral-900/80'
          : 'bg-white hover:bg-neutral-50'
      } hover:shadow-md hover:shadow-primary-500/20`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={getEmbedUrl(certificate.imageUrl)}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        
        {/* Demo Video Link */}
        {certificate.demolink && (
          <a
            href={certificate.demolink}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute bottom-2 ${direction === 'rtl' ? 'left-2' : 'right-2'} 
              p-1 rounded-full bg-primary-500/90 text-white hover:bg-primary-600 
              transition-all duration-300 transform hover:scale-105`}
          >
            <FiPlayCircle className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-2.5">
        <h3 className={`text-base font-bold mb-1.5 ${
          theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
        }`}>
          {title}
        </h3>
        
        <p className={`mb-2.5 text-xs ${
          theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
        }`}>
          {description}
        </p>

        {/* Certificate Details */}
        <div className="flex gap-2.5 mb-2.5 text-[10px] text-neutral-500">
          <div className="flex items-center gap-1">
            <FiClock className="w-3 h-3" />
            <span>{certificate.details.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiBarChart2 className="w-3 h-3" />
            <span>{certificate.details.level}</span>
          </div>
        </div>

        {/* Prices and Buy Now */}
        <div className="space-y-2">
          {/* Prices */}
          <div className={`flex gap-3 ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div>
              <p className="text-[10px] text-neutral-500">USD</p>
              <div className="flex items-center gap-1.5">
                <p className={`text-sm font-semibold line-through opacity-75 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  ${certificate.price.usd}
                </p>
                <p className={`text-sm font-bold ${
                  theme === 'dark' ? 'text-primary-300' : 'text-primary-700'
                }`}>
                  ${certificate.price.usd - 10}
                </p>
              </div>
            </div>
            <div>
              <p className="text-[10px] text-neutral-500">SAR</p>
              <div className="flex items-center gap-1.5">
                <p className={`text-sm font-semibold line-through opacity-75 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  {certificate.price.sar} ﷼
                </p>
                <p className={`text-sm font-bold ${
                  theme === 'dark' ? 'text-primary-300' : 'text-primary-700'
                }`}>
                  {certificate.price.sar - 50} ﷼
                </p>
              </div>
            </div>
          </div>

          {/* Buy Now Button */}
          <a
            href="https://t.me/Abn3mad"
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full text-center py-1.5 px-3 rounded-md text-xs
              bg-primary-500 text-white font-semibold
              hover:bg-primary-600 transition-colors duration-300
              ${theme === 'dark' ? 'hover:bg-primary-400' : 'hover:bg-primary-600'}`}
          >
            {language === 'ar' ? 'اشتري الآن' : 'Buy Now'}
          </a>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-t from-neutral-900/80 to-transparent'
          : 'bg-gradient-to-t from-white/80 to-transparent'
      } opacity-0 hover:opacity-100`} />
    </div>
  );
}
