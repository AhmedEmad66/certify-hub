'use client';

import { Certificate } from '@/types/certificate';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { FiClock, FiBarChart2, FiPlayCircle } from 'react-icons/fi';
import { useState } from 'react';

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const { theme } = useTheme();
  const { direction, language } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);

  // Get localized content
  const title = language === 'ar' && certificate.titleAr ? certificate.titleAr : certificate.title;
  const description = language === 'ar' && certificate.descriptionAr ? certificate.descriptionAr : certificate.description;

  // Convert Google Drive link to embedded image URL
  const getEmbedUrl = (url: string) => {
    const fileId = url.match(/\/d\/(.*?)\//)![1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

  // Convert Google Drive link to embedded video URL
  const getVideoEmbedUrl = (url: string) => {
    const fileId = url.match(/\/d\/(.*?)\//)![1];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-neutral-900/50 hover:bg-neutral-900/80'
          : 'bg-white hover:bg-neutral-50'
      } hover:shadow-xl hover:shadow-primary-500/20`}
    >
      {/* Image and Video Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {showVideo && certificate.demolink ? (
          <iframe 
            src={getVideoEmbedUrl(certificate.demolink)} 
            className="absolute inset-0 w-full h-full"
            allow="autoplay"
          />
        ) : (
          <>
            <Image
              src={getEmbedUrl(certificate.imageUrl)}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            
            {/* Demo Video Button */}
            {certificate.demolink && (
              <a
                href={certificate.demolink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowVideo(false)}
                className={`absolute bottom-4 ${direction === 'rtl' ? 'left-4' : 'right-4'} 
                  p-2 rounded-full bg-primary-500/90 text-white hover:bg-primary-600 
                  transition-all duration-300 transform hover:scale-110`}
              >
                <FiPlayCircle className="w-6 h-6" />
              </a>
            )}
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${
          theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
        }`}>
          {title}
        </h3>
        
        <p className={`mb-4 line-clamp-2 ${
          theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
        }`}>
          {description}
        </p>

        {/* Certificate Details */}
        <div className="flex gap-4 mb-4 text-sm text-neutral-500">
          <div className="flex items-center gap-1">
            <FiClock className="w-4 h-4" />
            <span>{certificate.details.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiBarChart2 className="w-4 h-4" />
            <span>{certificate.details.level}</span>
          </div>
        </div>

        {/* Prices */}
        <div className={`flex gap-4 ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="flex-1">
            <p className="text-sm text-neutral-500">USD</p>
            <p className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-primary-300' : 'text-primary-700'
            }`}>
              ${certificate.price.usd}
            </p>
          </div>
          <div className="flex-1">
            <p className="text-sm text-neutral-500">SAR</p>
            <p className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-primary-300' : 'text-primary-700'
            }`}>
              {certificate.price.sar} ﷼
            </p>
          </div>
        </div>

        {/* Buy Now Button */}
        <a
          href="https://t.me/Abn3mad"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 block w-full text-center py-2 px-4 rounded-lg 
            bg-primary-500 text-white font-semibold
            hover:bg-primary-600 transition-colors duration-300
            ${theme === 'dark' ? 'hover:bg-primary-400' : 'hover:bg-primary-600'}`}
        >
          {language === 'ar' ? 'اشتري الآن' : 'Buy Now'}
        </a>
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
