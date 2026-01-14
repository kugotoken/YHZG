import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-night-900 text-gold-100 p-8 text-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 5.5, duration: 1 }}
      onAnimationComplete={onComplete}
    >
      {/* Logo Animation */}
      <motion.img
        src="https://placehold.co/200x200/FBC02D/050A18?text=Logo&font=serif" // 请在此处替换您的 Logo 图片链接
        alt="Firefly Logo"
        className="w-24 h-24 md:w-32 md:h-32 mb-8 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.3)] object-contain"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="max-w-2xl font-serif leading-loose">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1.5 }}
          className="text-xl md:text-2xl mb-6 text-gold-200"
        >
          “每一个微小的个体，都有权在 BSC 的星空下闪耀。”
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 1.5 }}
          className="text-lg md:text-xl text-gold-400"
        >
          这不是一个人的战斗，而是千万萤火汇聚成的光海。
        </motion.p>
      </div>
      
      <motion.div 
        className="mt-12 w-16 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 3 }}
      />
    </motion.div>
  );
};

export default LoadingScreen;