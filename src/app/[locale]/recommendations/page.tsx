'use client';

import { useState } from 'react';
import { MapPin, CloudRain, DollarSign, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function RecommendationsPage() {
  const t = useTranslations('recommendations');
  const [formData, setFormData] = useState({
    location: '',
    soilType: '',
    season: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, fetch recommendations from API
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('title')}</h1>
          <p className="text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('form.title')}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    {t('form.location')}
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    placeholder={t('form.locationPlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.soilType')}
                  </label>
                  <select
                    value={formData.soilType}
                    onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  >
                    <option value="">{t('form.soilTypePlaceholder')}</option>
                    <option value="clay">{t('form.soilTypes.clay')}</option>
                    <option value="sandy">{t('form.soilTypes.sandy')}</option>
                    <option value="loamy">{t('form.soilTypes.loamy')}</option>
                    <option value="silt">{t('form.soilTypes.silt')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <CloudRain className="inline h-4 w-4 mr-1" />
                    {t('form.season')}
                  </label>
                  <select
                    value={formData.season}
                    onChange={(e) => setFormData({ ...formData, season: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  >
                    <option value="">{t('form.seasonPlaceholder')}</option>
                    <option value="kharif">{t('form.seasons.kharif')}</option>
                    <option value="rabi">{t('form.seasons.rabi')}</option>
                    <option value="zaid">{t('form.seasons.zaid')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <DollarSign className="inline h-4 w-4 mr-1" />
                    {t('form.budget')}
                  </label>
                  <input
                    type="number"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    placeholder={t('form.budgetPlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-5 w-5" />
                  {t('form.submit')}
                </button>
              </form>
            </div>
          </div>

          {/* Recommendations List */}
          <div className="lg:col-span-2 space-y-6">
            <CropCard
              name={t('crops.rice.name')}
              suitability={95}
              expectedYield="4-5 tons/hectare"
              investment="₹25,000-30,000/hectare"
              duration="120-150 days"
              description={t('crops.rice.description')}
              t={t}
            />
            <CropCard
              name={t('crops.wheat.name')}
              suitability={88}
              expectedYield="3-4 tons/hectare"
              investment="₹20,000-25,000/hectare"
              duration="120-130 days"
              description={t('crops.wheat.description')}
              t={t}
            />
            <CropCard
              name={t('crops.cotton.name')}
              suitability={82}
              expectedYield="2-3 tons/hectare"
              investment="₹30,000-35,000/hectare"
              duration="150-180 days"
              description={t('crops.cotton.description')}
              t={t}
            />
            <CropCard
              name={t('crops.sugarcane.name')}
              suitability={78}
              expectedYield="60-80 tons/hectare"
              investment="₹40,000-50,000/hectare"
              duration="12-18 months"
              description={t('crops.sugarcane.description')}
              t={t}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function CropCard({ name, suitability, expectedYield, investment, duration, description, t }: {
  name: string;
  suitability: number;
  expectedYield: string;
  investment: string;
  duration: string;
  description: string;
  t: any;
}) {
  const getSuitabilityColor = (score: number) => {
    if (score >= 85) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-orange-600 bg-orange-100';
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
        <div className={`px-4 py-2 rounded-full ${getSuitabilityColor(suitability)}`}>
          <span className="font-bold">{suitability}%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="border-l-4 border-green-600 pl-4">
          <p className="text-sm text-gray-600">{t('metrics.expectedYield')}</p>
          <p className="font-semibold text-gray-900">{expectedYield}</p>
        </div>
        <div className="border-l-4 border-blue-600 pl-4">
          <p className="text-sm text-gray-600">{t('metrics.investment')}</p>
          <p className="font-semibold text-gray-900">{investment}</p>
        </div>
        <div className="border-l-4 border-purple-600 pl-4">
          <p className="text-sm text-gray-600">{t('metrics.duration')}</p>
          <p className="font-semibold text-gray-900">{duration}</p>
        </div>
      </div>
    </div>
  );
}
