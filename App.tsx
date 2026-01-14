import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import FireflyBackground from './components/FireflyBackground';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import Tokenomics from './components/Tokenomics';
import VisionSection from './components/VisionSection';
import Footer from './components/Footer';
import { Language } from './translations';

const App: React.FC = () => {
  // In production, you might adjust the initial state to true to see the loading screen
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState<Language>('zh');

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  return (
    <div className="min-h-screen bg-night-900 text-white font-sans selection:bg-gold-500 selection:text-night-900">
      <FireflyBackground />
      
      {/* Language Toggle Button - Fixed Top Right */}
      <motion.button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-[60] flex items-center gap-2 px-4 py-2 bg-night-800/80 backdrop-blur-md border border-gold-600/50 rounded-full text-gold-300 hover:text-white hover:border-gold-400 transition-all shadow-[0_0_15px_rgba(251,191,36,0.2)]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Languages size={18} />
        <span className="font-serif font-bold text-sm">{lang === 'zh' ? 'EN' : '中'}</span>
      </motion.button>

      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} lang={lang} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroSection lang={lang} />
          <Tokenomics lang={lang} />
          <VisionSection lang={lang} />
          <Footer lang={lang} />
        </motion.div>
      )}
    </div>
  );
};

export default App;