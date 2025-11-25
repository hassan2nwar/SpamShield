/// File: src/App.tsx
import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import EmailChecker from './components/EmailChecker';
import AboutSection from './components/AboutSection';

// Helper to set <meta name="..."> tags
function setMetaTag(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

// Helper to set <meta property="..."> tags (Open Graph)
function setPropertyMeta(prop: string, content: string) {
  let element = document.querySelector(`meta[property="${prop}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', prop);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

const App: React.FC = () => {
  const checkerRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);

  // Scroll to section smoothly
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    // Set page title and meta tags
    document.title = 'SpamShield – Free Email Spam & Phishing Detector';
    setMetaTag(
      'description',
      'SpamShield is a free online email spam and phishing detector. Analyze email content instantly to identify spam, phishing attempts, and malicious content.'
    );
    setMetaTag(
      'keywords',
      'email spam detector, spam checker, phishing detector, email analyzer, detect spam email'
    );

    // Open Graph
    setPropertyMeta('og:title', 'SpamShield – Email Spam & Phishing Detector');
    setPropertyMeta(
      'og:description',
      'Protect your inbox with instant spam and phishing detection. Use SpamShield to analyze suspicious emails in seconds.'
    );
    setPropertyMeta('og:type', 'website');
    setPropertyMeta('og:url', window.location.href);

    // Twitter card
    setMetaTag('twitter:card', 'summary_large_image');

    // Canonical link
    let canonical = document.querySelector(
      "link[rel='canonical']"
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + window.location.pathname;

    // JSON-LD structured data
    let ld = document.getElementById('ld-json');
    if (!ld) {
      ld = document.createElement('script');
      ld.setAttribute('type', 'application/ld+json');
      ld.setAttribute('id', 'ld-json');
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'SpamShield',
      applicationCategory: 'SecurityApplication',
      operatingSystem: 'Web',
      description: 'Free online email spam and phishing detector.',
      url: window.location.origin,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen text-slate-800">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 shadow-sm border-b border-slate-200 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="sr-only">SpamShield logo</span>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
              SpamShield
            </h1>
          </div>
          <nav className="flex gap-2 sm:gap-3" aria-label="Main navigation">
            <a
              href="#email-checker"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(checkerRef);
              }}
              className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 rounded-lg font-medium text-slate-600 hover:bg-slate-100 transition-all text-sm sm:text-base"
            >
              Checker
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(aboutRef);
              }}
              className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 rounded-lg font-medium text-slate-600 hover:bg-slate-100 transition-all text-sm sm:text-base"
            >
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section id="hero" aria-labelledby="hero-title">
          <HeroSection onGetStarted={() => scrollToSection(checkerRef)} />
        </section>

        <section
          id="email-checker"
          ref={checkerRef}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
          aria-labelledby="email-checker-heading"
        >
          <EmailChecker />
        </section>

        <section
          id="about"
          ref={aboutRef}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
          aria-labelledby="about-heading"
        >
          <AboutSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 sm:mt-16 md:mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h2 className="font-bold text-slate-900 text-sm sm:text-base">
                SpamShield
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Protecting your inbox from spam and phishing attempts
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">
                Quick Links
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="#email-checker"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    Email Checker
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    About Creator
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">
                Stay Safe
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Never share personal information via email. Always verify sender
                addresses before responding to sensitive requests.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-4 sm:pt-6 text-center text-slate-600 text-xs sm:text-sm">
            <p>Built with security and privacy in mind</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
