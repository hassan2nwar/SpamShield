/// File: src/components/HeroSection.tsx
import React from 'react';
import { Shield, CheckCircle, Lock, Zap } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-24 md:pt-24 md:pb-32"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Your Email Security Matters
                </span>
              </div>

              <h1
                id="hero-title"
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight"
              >
                Protect Your Inbox from Spam
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                SpamShield analyzes incoming emails to identify spam, phishing
                attempts, and malicious content. Stay safe online with instant,
                accurate detection.
              </p>
            </div>

            <button
              onClick={onGetStarted}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Zap className="w-5 h-5" />
              Get Started Now
            </button>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-slate-900">Fast</span>
                </div>
                <p className="text-sm text-slate-600">Instant analysis</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-slate-900">Secure</span>
                </div>
                <p className="text-sm text-slate-600">Your data is safe</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-slate-900">Reliable</span>
                </div>
                <p className="text-sm text-slate-600">Proven detection</p>
              </div>
            </div>
          </div>

          {/* Right Column (Mockup Visualization) */}
          <div className="relative h-96 md:h-full min-h-[384px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-20 blur-2xl" />

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl p-8 flex flex-col justify-between overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-white">
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <span className="text-sm font-medium truncate">
                    spam.detector@email.com
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-white">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <span className="text-sm font-medium truncate">
                    phishing.alert@fake.com
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-white">
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                  <span className="text-sm font-medium truncate">
                    newsletter@company.com
                  </span>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white border border-white/20">
                <p className="text-xs font-medium mb-3 opacity-80">
                  Analysis Results
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Spam Confidence</span>
                    <span className="font-semibold">23%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-green-400 h-full rounded-full"
                      style={{ width: '23%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
