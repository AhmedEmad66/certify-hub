export type Language = 'en' | 'ar';

export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    welcome: 'Welcome',
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    settings: 'Settings',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    language: 'Language',
    search: 'Search',
    toggleLanguage: 'Toggle Language',
    toggleTheme: 'Toggle Theme',
    moreOffers: 'For more offers and discount',
    contactUs: 'Contact Us',
    contactOnTelegram: 'Contact us on Telegram',
    getStarted: 'Get Started',
    discount: '',
    allRightsReserved: 'All rights reserved',
  },
  ar: {
    welcome: 'مرحباً',
    home: 'الرئيسية',
    about: 'حول',
    contact: 'اتصل بنا',
    settings: 'الإعدادات',
    darkMode: 'الوضع الداكن',
    lightMode: 'الوضع الفاتح',
    language: 'اللغة',
    search: 'بحث',
    toggleLanguage: 'تغيير اللغة',
    toggleTheme: 'تغيير السمة',
    moreOffers: 'لمزيد من العروض والخصومات',
    contactUs: 'تواصل معنا',
    contactOnTelegram: 'تواصل معنا على تيليجرام',
    getStarted: 'ابدأ الآن',
    discount:'خصم 50 ريال بمناسبة يوم التأسيس السعودي',
    allRightsReserved: 'جميع الحقوق محفوظة',
  },
} as const;

export const getDirection = (language: Language): 'ltr' | 'rtl' => {
  return language === 'ar' ? 'rtl' : 'ltr';
};
