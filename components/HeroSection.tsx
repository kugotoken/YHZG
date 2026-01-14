import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 overflow-hidden">
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-8">
        
        {/* Logo */}
        <motion.img
          src="/images/1.png" //
          alt="Firefly Logo"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-[0_0_40px_rgba(251,191,36,0.4)] border-2 border-gold-500/30 object-contain p-2 bg-night-900/50 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-100 to-gold-600 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)] -mt-2 mb-4"
        >
          萤火之光
        </motion.h1>

        {/* Video Container - 1280x566 Aspect Ratio Wrapper */}
        <motion.div 
          className="w-full relative rounded-2xl overflow-hidden border border-gold-800/30 shadow-[0_0_30px_rgba(251,191,36,0.1)] group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ aspectRatio: '1280 / 566' }}
        >
          {/* Overlay to tint the video slightly warm/dark */}
          <div className="absolute inset-0 bg-night-900/20 z-10 pointer-events-none mix-blend-overlay"></div>
          
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://picsum.photos/1280/566?grayscale&blur=2"
          >
            {/* Using a high-quality creative commons abstract particle video as placeholder */}
            <source src="/videos/1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Quote Section */}
        <motion.div 
          className="max-w-3xl text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <blockquote className="text-xl md:text-3xl font-serif italic text-gold-100 leading-relaxed drop-shadow-md">
            “来都来了，就不白来一场嘛，就算你是一个微弱的萤火，也可以尝试一下，像一个星辰一样闪亮！！！”
          </blockquote>
          <cite className="block text-gold-400 font-sans font-bold text-lg not-italic mt-4">— 何一 (He Yi)</cite>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a 
            href="https://t.me/XXXXXX" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-night-800 border border-gold-600 text-gold-300 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gold-900/20 hover:text-white hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] hover:border-gold-400 transition-all duration-300"
          >
            <Users className="w-5 h-5" />
            加入社区
          </a>
          <a 
            href="https://four.meme" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-400 text-night-900 rounded-full font-bold text-lg flex items-center gap-2 shadow-[0_0_15px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.8)] hover:scale-105 transition-all duration-300"
          >
            <Rocket className="w-5 h-5" />
            立即在 Four.Meme 购买
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
