'use client';

import { CertificateCard } from './CertificateCard';
import { useTheme } from './ThemeProvider';
import { certificates } from '@/data/certificates';
import { ComingSoon } from './ComingSoon'; // assuming ComingSoon component is in the same directory

export function CertificateGrid() {
  const { theme } = useTheme();

  return (
    <div className={`w-full transition-colors duration-300 ${
      theme === 'dark' ? 'bg-neutral-950' : 'bg-neutral-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}
        </div>

        <ComingSoon />
      </div>
    </div>
  );
}
