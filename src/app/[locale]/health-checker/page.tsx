'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, Upload, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

interface AnalysisResult {
  disease: string;
  confidence: number;
  severity: string;
  treatment: string[];
  prevention: string[];
}

export default function HealthCheckerPage() {
  const t = useTranslations('healthChecker');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    setAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        disease: 'Leaf Blight',
        confidence: 87,
        severity: 'Moderate',
        treatment: [
          'Remove affected leaves immediately',
          'Apply fungicide (Mancozeb 75% WP at 2g/L)',
          'Improve air circulation around plants',
          'Reduce overhead watering'
        ],
        prevention: [
          'Use disease-resistant varieties',
          'Maintain proper plant spacing',
          'Apply preventive fungicide sprays',
          'Practice crop rotation'
        ]
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('title')}</h1>
          <p className="text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('uploadSection.title')}</h2>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-green-500 transition">
                {selectedImage ? (
                  <div className="space-y-4">
                    <Image
                      src={selectedImage}
                      alt="Uploaded crop"
                      width={400}
                      height={256}
                      className="max-h-64 mx-auto rounded-lg object-contain"
                    />
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      {t('uploadSection.removeImage')}
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <Camera className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">{t('uploadSection.clickToUpload')}</p>
                    <p className="text-sm text-gray-500">{t('uploadSection.fileFormat')}</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {selectedImage && !result && (
                <button
                  onClick={analyzeImage}
                  disabled={analyzing}
                  className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {analyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      {t('uploadSection.analyzing')}
                    </>
                  ) : (
                    <>
                      <Upload className="h-5 w-5" />
                      {t('uploadSection.analyzeImage')}
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-xl p-6 mt-6">
              <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                {t('tips.title')}
              </h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• {t('tips.tip1')}</li>
                <li>• {t('tips.tip2')}</li>
                <li>• {t('tips.tip3')}</li>
                <li>• {t('tips.tip4')}</li>
              </ul>
            </div>
          </div>

          {/* Results Section */}
          <div>
            {result ? (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{t('results.title')}</h2>
                    <div className={`px-4 py-2 rounded-full ${
                      result.severity === 'Severe' ? 'bg-red-100 text-red-700' :
                      result.severity === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {result.severity}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">{t('results.detectedDisease')}</p>
                      <p className="text-xl font-semibold text-gray-900">{result.disease}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{t('results.confidenceLevel')}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${result.confidence}%` }}
                          ></div>
                        </div>
                        <span className="font-semibold text-gray-900">{result.confidence}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    {t('results.treatmentTitle')}
                  </h3>
                  <ul className="space-y-3">
                    {result.treatment.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <XCircle className="h-6 w-6 text-blue-600" />
                    {t('results.preventionTitle')}
                  </h3>
                  <ul className="space-y-3">
                    {result.prevention.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <Camera className="h-24 w-24 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('results.noAnalysis')}</h3>
                <p className="text-gray-600">{t('results.noAnalysisDesc')}</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
