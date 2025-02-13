'use client';

import { CertificateCard } from './CertificateCard';
import { useTheme } from './ThemeProvider';
import { certificates } from '@/data/certificates';
import { ComingSoon } from './ComingSoon';
import { ReviewSection } from './ReviewSection';

export function CertificateGrid() {
  const { theme } = useTheme();
  return (
    <div className={`w-full ${
      theme === 'dark' ? 'bg-neutral-950' : 'bg-neutral-50'
    }`}>
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-8">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}
        </div>

        <ComingSoon />
      </div>
      
      {/* Reviews Section */}
      <ReviewSection />
    </div>
  );
}
