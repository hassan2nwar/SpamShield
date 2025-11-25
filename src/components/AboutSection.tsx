/// File: src/components/AboutSection.tsx
import React from 'react';
import { Shield, Heart } from 'lucide-react'; // Make sure these icons are installed/imported

const AboutSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      {/* Introduction */}
      <p className="text-slate-700 text-xs sm:text-sm md:text-base">
        Welcome! I created this Email Spam Detector to help people protect
        themselves from malicious emails, phishing attempts, and unwanted spam.
        In today's digital world, our inboxes are constantly bombarded with
        suspicious messages, and it can be difficult to distinguish legitimate
        emails from dangerous ones.
      </p>

      {/* Why I Built This */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
        <div className="flex items-start gap-2 sm:gap-3">
          <Shield
            className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-1"
            aria-hidden="true"
          />
          <div>
            <h3 className="font-semibold text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">
              Why I Built This
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm md:text-base">
              I've seen too many friends and family members fall victim to
              phishing scams and spam emails. I wanted to create a simple, free
              tool that anyone could use to quickly check if an email might be
              spam before clicking any links or sharing personal information.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">
          How It Works
        </h3>
        <p className="text-slate-700 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
          This tool analyzes various characteristics of an email to determine if
          it might be spam:
        </p>
        <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-slate-700 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
          <li>Suspicious keywords commonly found in spam emails</li>
          <li>Excessive use of punctuation and capital letters</li>
          <li>Multiple links or shortened URLs</li>
          <li>Fake reply/forward indicators</li>
          <li>Invalid email formats</li>
          <li>Common phishing patterns</li>
        </ul>
      </div>

      {/* Stay Safe Online */}
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">
          Stay Safe Online
        </h3>
        <p className="text-slate-700 text-xs sm:text-sm md:text-base">
          Remember, this tool is meant to assist you, but always use your best
          judgment. If something feels off about an email, it probably is. Never
          share sensitive information like passwords, credit card numbers, or
          social security numbers via email.
        </p>
      </div>

      {/* About the Creator */}
      <aside className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-white">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
          <h2 className="text-xl sm:text-2xl font-bold">About the Creator</h2>
        </div>
        <p className="text-blue-50 text-sm sm:text-base md:text-lg leading-relaxed">
         Hi, I’m Hassan Anwar—a developer with a strong passion for data, and building tools that make people’s digital lives safer. 
          I created SpamShield because I’ve seen how easily someone can fall victim to phishing emails, fake alerts, and cleverly disguised scams. 
          Even tech-savvy people get fooled sometimes.
        </p>
        <p className="text-blue-50 mt-3 sm:mt-4 text-sm sm:text-base">
          If you have suggestions for improvements or found this tool helpful,
          I'd love to hear from you!
        </p>
      </aside>
    </div>
  );
};

export default AboutSection;
