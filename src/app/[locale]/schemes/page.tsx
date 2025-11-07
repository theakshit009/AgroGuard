'use client';

import { FileText, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function SchemesPage() {
  const t = useTranslations('schemes');
  const [currentPage, setCurrentPage] = useState(1);
  const schemesPerPage = 5;

  // Get schemes from translations
  const schemes = t.raw('list') as Array<{
    title: string;
    category: string;
    amount: string;
    launchDate: string;
    description: string;
    eligibility: string[];
    benefits: string[];
    link: string;
  }>;

  // Calculate pagination
  const totalSchemes = schemes.length;
  const totalPages = Math.ceil(totalSchemes / schemesPerPage);
  const startIndex = (currentPage - 1) * schemesPerPage;
  const endIndex = startIndex + schemesPerPage;
  const currentSchemes = schemes.slice(startIndex, endIndex);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('title')}</h1>
          <p className="text-gray-600">{t('subtitle')}</p>
        </div>

        {/* Pagination Info */}
        <div className="mb-6 text-sm text-gray-600">
          {t('showingSchemes', { start: startIndex + 1, end: Math.min(endIndex, totalSchemes), total: totalSchemes })}
        </div>

        {/* Scheme Cards */}
        <div className="space-y-6 mb-8">
          {currentSchemes.map((scheme, index) => (
            <SchemeCard
              key={index}
              title={scheme.title}
              category={scheme.category}
              amount={scheme.amount}
              launchDate={scheme.launchDate}
              description={scheme.description}
              eligibility={scheme.eligibility}
              benefits={scheme.benefits}
              link={scheme.link}
              t={t}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-6">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-green-600 border border-green-600 hover:bg-green-50'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
            {t('previous')}
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-10 h-10 rounded-lg font-semibold transition ${
                  currentPage === page
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-green-600 border border-green-600 hover:bg-green-50'
            }`}
          >
            {t('next')}
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function SchemeCard({ title, category, amount, launchDate, description, eligibility, benefits, link, t }: {
  title: string;
  category: string;
  amount: string;
  launchDate: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  link: string;
  t: ReturnType<typeof useTranslations<'schemes'>>;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <FileText className="h-6 w-6 text-green-600" />
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
              {category}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
              {launchDate}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-green-600 font-semibold mb-3">{amount}</p>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">{t('eligibility')}</h4>
          <ul className="space-y-2">
            {eligibility.map((item, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">{t('benefits')}</h4>
          <ul className="space-y-2">
            {benefits.map((item, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
      >
        {t('learnMore')}
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}
