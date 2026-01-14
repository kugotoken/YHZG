import React from 'react';
import { motion } from 'framer-motion';
import { translations, Language } from '../translations';

interface VisionSectionProps {
  lang: Language;
}

const VisionSection: React.FC<VisionSectionProps> = ({ lang }) => {
  const t = translations[lang].vision;

  return (
    <section className="relative z-10 min-h-[60vh] flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 leading-snug">
            {t.title_1}<br />
            <span className="text-gold-400">{t.title_2}</span>
          </h2>
          
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-10"></div>

          <p className="text-xl md:text-2xl text-gold-100/90 leading-relaxed font-light">
            {t.desc_1}<br />
            {t.desc_2}
          </p>
        </motion.div>

        {/* Decorative Particle cluster graphic represented by simple css circles */}
        <motion.div 
          className="mt-16 relative h-32 flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_20px_white] animate-pulse"></div>
          <div className="absolute w-2 h-2 bg-gold-300 rounded-full shadow-[0_0_10px_gold] -translate-x-12 translate-y-4 opacity-70"></div>
          <div className="absolute w-2 h-2 bg-gold-300 rounded-full shadow-[0_0_10px_gold] translate-x-12 -translate-y-4 opacity-70"></div>
          <div className="absolute w-1 h-1 bg-gold-500 rounded-full shadow-[0_0_5px_gold] -translate-x-20 -translate-y-8 opacity-50"></div>
          <div className="absolute w-1 h-1 bg-gold-500 rounded-full shadow-[0_0_5px_gold] translate-x-20 translate-y-8 opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;