import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FireflyBackground from './components/FireflyBackground';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import Tokenomics from './components/Tokenomics';
import VisionSection from './components/VisionSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  // In production, you might adjust the initial state to true to see the loading screen
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-night-900 text-white font-sans selection:bg-gold-500 selection:text-night-900">
      <FireflyBackground />

      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroSection />
          <Tokenomics />
          <VisionSection />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default App;