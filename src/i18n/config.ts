export const locales = ['en', 'hi', 'ml', 'te', 'pa'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  hi: 'हिंदी',
  ml: 'മലയാളം',
  te: 'తెలుగు',
  pa: 'ਪੰਜਾਬੀ'
};
