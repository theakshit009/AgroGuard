'use client';

import { Link } from '@/i18n/routing';
import { BarChart3, Lightbulb, Camera, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center space-y-6 lg:space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {t('hero.title')}
            <span className="text-green-600">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/login"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
            >
              {t('hero.getStarted')}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/analytics"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition"
            >
              {t('hero.exploreFeatures')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {t('features.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <FeatureCard
            icon={<BarChart3 className="h-12 w-12 text-green-600" />}
            title={t('features.analytics.title')}
            description={t('features.analytics.description')}
            link="/analytics"
          />
          <FeatureCard
            icon={<Lightbulb className="h-12 w-12 text-green-600" />}
            title={t('features.recommendations.title')}
            description={t('features.recommendations.description')}
            link="/recommendations"
          />
          <FeatureCard
            icon={<Camera className="h-12 w-12 text-green-600" />}
            title={t('features.healthChecker.title')}
            description={t('features.healthChecker.description')}
            link="/health-checker"
          />
          <FeatureCard
            icon={<FileText className="h-12 w-12 text-green-600" />}
            title={t('features.schemes.title')}
            description={t('features.schemes.description')}
            link="/schemes"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            {t('benefits.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <BenefitCard
              title={t('benefits.dataInsights.title')}
              description={t('benefits.dataInsights.description')}
            />
            <BenefitCard
              title={t('benefits.expertGuidance.title')}
              description={t('benefits.expertGuidance.description')}
            />
            <BenefitCard
              title={t('benefits.support.title')}
              description={t('benefits.support.description')}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-linear-to-r from-green-500 to-emerald-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('cta.subtitle')}
          </p>
          <Link 
            href="/login"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description, link }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  link: string;
}) {
  return (
    <Link href={link} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition group">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <CheckCircle className="h-8 w-8 shrink-0 mt-1" />
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="opacity-90">{description}</p>
      </div>
    </div>
  );
}
