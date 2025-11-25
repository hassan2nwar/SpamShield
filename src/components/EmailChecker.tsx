/// File: src/components/EmailChecker.tsx
import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Mail } from 'lucide-react';

interface AnalysisResult {
  isSpam: boolean;
  score: number;
  reasons: string[];
}

const EmailChecker: React.FC = () => {
  const [emailContent, setEmailContent] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeEmail = () => {
    setIsAnalyzing(true);

    setTimeout(() => {
      const reasons: string[] = [];
      let spamScore = 0;

      const content = emailContent.toLowerCase();
      const subjectLower = subject.toLowerCase();

      const spamKeywords = [
        'congratulations',
        'winner',
        'claim',
        'prize',
        'urgent',
        'act now',
        'limited time',
        'click here',
        'verify account',
        'suspended',
        'confirm',
        'free money',
        'inheritance',
        'nigerian prince',
        'bitcoin',
        'cryptocurrency',
        'weight loss',
        'viagra',
        'casino',
        'loan approved',
      ];

      spamKeywords.forEach((keyword) => {
        if (content.includes(keyword) || subjectLower.includes(keyword)) {
          spamScore += 15;
          reasons.push(`Contains suspicious keyword: "${keyword}"`);
        }
      });

      if (subjectLower.includes('re:') || subjectLower.includes('fwd:')) {
        if (!content.includes('wrote:') && !content.includes('forwarded')) {
          spamScore += 10;
          reasons.push('Fake reply/forward indicator');
        }
      }

      if ((content.match(/!/g) || []).length > 3) {
        spamScore += 10;
        reasons.push('Excessive use of exclamation marks');
      }

      if (content.toUpperCase() === content && content.length > 20) {
        spamScore += 15;
        reasons.push('Entire message in CAPS');
      }

      if (content.includes('$$$') || (content.match(/\$/g) || []).length > 5) {
        spamScore += 10;
        reasons.push('Multiple dollar signs detected');
      }

      if (senderEmail && !senderEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        spamScore += 20;
        reasons.push('Invalid email format');
      }

      if ((content.match(/http/g) || []).length > 3) {
        spamScore += 15;
        reasons.push('Multiple links detected');
      }

      if (content.length < 20 && (content.match(/http/g) || []).length > 0) {
        spamScore += 20;
        reasons.push('Very short message with links');
      }

      const isSpam = spamScore >= 30;

      if (!isSpam && reasons.length === 0) {
        reasons.push('No suspicious patterns detected');
        reasons.push('Sender format appears legitimate');
        reasons.push('Content structure is normal');
      }

      setResult({
        isSpam,
        score: Math.min(spamScore, 100),
        reasons,
      });

      setIsAnalyzing(false);
    }, 1000);
  };

  const handleReset = () => {
    setEmailContent('');
    setSenderEmail('');
    setSubject('');
    setResult(null);
  };

  return (
    <div className="space-y-8">
      {/* Form Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-slate-900">
            Analyze Your Email
          </h2>
        </div>

        <div className="space-y-6">
          {/* Sender Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Sender Email Address
            </label>
            <input
              type="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder="sender@example.com"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject line of the email"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Email Content */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Content
            </label>
            <textarea
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              placeholder="Paste the email content here..."
              rows={8}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={analyzeEmail}
              disabled={!emailContent.trim() || isAnalyzing}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze Email'}
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-all"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Result Section */}
      {result && (
        <div
          className={`bg-white rounded-xl shadow-lg p-8 border-l-4 ${
            result.isSpam ? 'border-red-500' : 'border-green-500'
          }`}
        >
          <div className="flex items-start gap-4 mb-6">
            {result.isSpam ? (
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
            ) : (
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
            )}
            <div className="flex-1">
              <h3
                className={`text-2xl font-bold mb-2 ${
                  result.isSpam ? 'text-red-600' : 'text-green-600'
                }`}
              >
                {result.isSpam ? 'Likely SPAM' : 'Appears Legitimate'}
              </h3>
              <p className="text-slate-600">
                Spam confidence score:{' '}
                <span className="font-semibold">{result.score}%</span>
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-3">
              Analysis Details:
            </h4>
            <ul className="space-y-2">
              {result.reasons.map((reason, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-slate-700"
                >
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {result.isSpam && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-800">
                <strong>Warning:</strong> Do not click any links, download
                attachments, or share personal information. Mark this email as
                spam and delete it immediately.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EmailChecker;
