import { useRef } from 'react';
import { Mail, Shield, ArrowDown } from 'lucide-react';
import HeroSection from './components/HeroSection';
import EmailChecker from './components/EmailChecker';
import AboutSection from './components/AboutSection';

function App() {
  const checkerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200 backdrop-blur-sm bg-white/95">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7 text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-900">SpamShield</h1>
          </div>
          <nav className="flex gap-3">
            <button
              onClick={() => scrollToSection(checkerRef)}
              className="px-5 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-100 transition-all"
            >
              <Mail className="w-4 h-4 inline mr-2" />
              Checker
            </button>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="px-5 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-100 transition-all"
            >
              About
            </button>
          </nav>
        </div>
      </header>

      <HeroSection onGetStarted={() => scrollToSection(checkerRef)} />

      <main className="max-w-6xl mx-auto px-4 space-y-20 py-20">
        <div ref={checkerRef} className="scroll-mt-20">
          <EmailChecker />
        </div>

        <div ref={aboutRef} className="scroll-mt-20">
          <AboutSection />
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-900">SpamShield</h3>
              </div>
              <p className="text-sm text-slate-600">Protecting your inbox from spam and phishing attempts</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection(checkerRef)} className="text-slate-600 hover:text-blue-600 transition-colors">Email Checker</button></li>
                <li><button onClick={() => scrollToSection(aboutRef)} className="text-slate-600 hover:text-blue-600 transition-colors">About Creator</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Stay Safe</h3>
              <p className="text-sm text-slate-600">Never share personal information via email. Always verify sender addresses before responding to sensitive requests.</p>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-6 text-center text-slate-600 text-sm">
            <p>Built with security and privacy in mind</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
