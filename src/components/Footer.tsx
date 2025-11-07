'use client';

import { Sprout, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold text-white">AgroGuard</span>
            </div>
            <p className="text-sm">
              {t('tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="/analytics" className="hover:text-green-500 transition">{t('links.analytics')}</Link></li>
              <li><Link href="/recommendations" className="hover:text-green-500 transition">{t('links.recommendations')}</Link></li>
              <li><Link href="/health-checker" className="hover:text-green-500 transition">{t('links.healthChecker')}</Link></li>
              <li><Link href="/schemes" className="hover:text-green-500 transition">{t('links.schemes')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('support')}</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-green-500 transition">{t('links.helpCenter')}</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition">{t('links.faqs')}</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition">{t('links.contactUs')}</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition">{t('links.privacyPolicy')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@agroguard.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 1800-XXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
