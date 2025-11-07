'use client';

import { BarChart3, TrendingUp, Droplets, Sun, DollarSign, Activity } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function AnalyticsPage() {
  const t = useTranslations('analytics');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('title')}</h1>
          <p className="text-gray-600">{t('subtitle')}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          <StatCard
            icon={<TrendingUp className="h-8 w-8 text-green-600" />}
            title={t('stats.totalYield')}
            value="2,450 kg"
            change="+12.5%"
            positive={true}
          />
          <StatCard
            icon={<Droplets className="h-8 w-8 text-blue-600" />}
            title={t('stats.waterUsage')}
            value="15,230 L"
            change="-8.2%"
            positive={true}
          />
          <StatCard
            icon={<Sun className="h-8 w-8 text-yellow-600" />}
            title={t('stats.weatherIndex')}
            value="82/100"
            change="+5.0%"
            positive={true}
          />
          <StatCard
            icon={<DollarSign className="h-8 w-8 text-emerald-600" />}
            title={t('stats.revenue')}
            value="₹98,450"
            change="+18.3%"
            positive={true}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-green-600" />
              {t('charts.cropYieldTrends')}
            </h2>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">{t('charts.chartPlaceholder')}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-6 w-6 text-blue-600" />
              {t('charts.resourceUtilization')}
            </h2>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">{t('charts.chartPlaceholder')}</p>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('activities.title')}</h2>
          <div className="space-y-4">
            <ActivityItem
              title={t('activities.irrigation.title')}
              time={t('activities.irrigation.time')}
              description={t('activities.irrigation.description')}
            />
            <ActivityItem
              title={t('activities.fertilizer.title')}
              time={t('activities.fertilizer.time')}
              description={t('activities.fertilizer.description')}
            />
            <ActivityItem
              title={t('activities.pestControl.title')}
              time={t('activities.pestControl.time')}
              description={t('activities.pestControl.description')}
            />
            <ActivityItem
              title={t('activities.yieldRecorded.title')}
              time={t('activities.yieldRecorded.time')}
              description={t('activities.yieldRecorded.description')}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function StatCard({ icon, title, value, change, positive }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        {icon}
        <span className={`text-sm font-semibold ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
      <h3 className="text-gray-600 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

function ActivityItem({ title, time, description }: {
  title: string;
  time: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 last:border-0">
      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
        <Activity className="h-5 w-5 text-green-600" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}
