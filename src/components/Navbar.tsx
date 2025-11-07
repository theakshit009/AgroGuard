'use client';

import { Link } from '@/i18n/routing';
import { Sprout, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('nav');

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">AgroGuard</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/analytics" className="text-gray-700 hover:text-green-600 transition">
              {t('analytics')}
            </Link>
            <Link href="/recommendations" className="text-gray-700 hover:text-green-600 transition">
              {t('recommendations')}
            </Link>
            <Link href="/health-checker" className="text-gray-700 hover:text-green-600 transition">
              {t('healthChecker')}
            </Link>
            <Link href="/schemes" className="text-gray-700 hover:text-green-600 transition">
              {t('schemes')}
            </Link>
            <LanguageSwitcher />
            <Link 
              href="/login" 
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              {t('login')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link 
              href="/analytics" 
              className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded"
            >
              {t('analytics')}
            </Link>
            <Link 
              href="/recommendations" 
              className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded"
            >
              {t('recommendations')}
            </Link>
            <Link 
              href="/health-checker" 
              className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded"
            >
              {t('healthChecker')}
            </Link>
            <Link 
              href="/schemes" 
              className="block px-4 py-2 text-gray-700 hover:bg-green-50 rounded"
            >
              {t('schemes')}
            </Link>
            <div className="px-4 py-2">
              <LanguageSwitcher />
            </div>
            <Link 
              href="/login" 
              className="block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              {t('login')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
