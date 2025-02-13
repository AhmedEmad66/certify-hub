'use client';

import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { FiStar } from 'react-icons/fi';

interface Review {
  id: string;
  name: string;
  nameAr?: string;
  comment: string;
  commentAr?: string;
  rating: number;
  date: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'John',
    nameAr: 'John',
    comment: 'Excellent certificates! The content is very comprehensive and well-structured.',
    commentAr: `Excellent certificates! The content is very comprehensive and well-structured.`,
    rating: 4,
    date: '2025-02-11'
  },
  {
    id: '2',
    name: 'جوود',
    nameAr: 'جوود',
    comment: 'تقيمي لاجل انه السعر كان غالي علي رغم ان البشمهندس قسملي إياه علي مرتين 😅، لو هقيم علي الدعم اللي كان معي يعتبر 24 ساعه مره كتر خيرهم وربي يكرمهم والله ابغي ازيد فوق ال5 نجوم♥️',
    commentAr: 'تقيمي لاجل انه السعر كان غالي علي رغم ان البشمهندس قسملي إياه علي مرتين 😅، لو هقيم علي الدعم اللي كان معي يعتبر 24 ساعه مره كتر خيرهم وربي يكرمهم والله ابغي ازيد فوق ال5 نجوم♥️',
    rating: 0,
    date: '2024-12-08'
  },
  {
    id: '3',
    name: 'محمد علي',
    nameAr: 'محمد علي',
    comment: 'شهادات احترافية ساعدتني في التقدم في مسيرتي المهنية.',
    commentAr: 'شهادات احترافية ساعدتني في التقدم في مسيرتي المهنية.',
    rating: 3,
    date: '2025-02-04'
  }
  {
    id: '4',
    name: 'عبدالرحمن',
    nameAr: 'عبدالرحمن',
    comment: 'شكرا جدا علي المساعدة والله.',
    commentAr: 'شكرا جدا علي المساعدة والله.',
    rating: 5,
    date: '2025-01-22'
  }
];

export function ReviewSection() {
  const { theme } = useTheme();
  const { language, direction } = useLanguage();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FiStar
        key={index}
        className={`w-3 h-3 ${
          index < rating
            ? 'fill-primary-500 text-primary-500'
            : theme === 'dark'
            ? 'text-neutral-600'
            : 'text-neutral-300'
        }`}
      />
    ));
  };

  return (
    <section className={`w-full ${
      theme === 'dark' ? 'bg-neutral-950' : 'bg-neutral-50'
    }`}>
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 py-8">
        <div className="text-center mb-8">
          <h2 className={`text-xl sm:text-2xl font-bold ${
            theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
          }`}>
            {language === 'ar' ? 'آراء عملائنا' : 'Customers Reviews'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {reviews.map((review) => {
            const name = language === 'ar' && review.nameAr ? review.nameAr : review.name;
            const comment = language === 'ar' && review.commentAr ? review.commentAr : review.comment;

            return (
              <div
                key={review.id}
                className={`relative rounded-lg p-3 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-neutral-900/50 hover:bg-neutral-900/80'
                    : 'bg-white hover:bg-neutral-50'
                } hover:shadow-md hover:shadow-primary-500/20`}
              >
                <div className={`flex items-center gap-2 mb-2 ${
                  direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'
                }`}>
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                  <span className={`text-xs ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    {new Date(review.date).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US')}
                  </span>
                </div>

                <h3 className={`text-sm font-semibold mb-1 ${
                  theme === 'dark' ? 'text-primary-300' : 'text-primary-700'
                }`}>
                  {name}
                </h3>

                <p className={`text-xs ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                }`}>
                  {comment}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
