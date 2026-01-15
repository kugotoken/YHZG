import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle, Coins, Ban, Database, Globe } from 'lucide-react';
import { translations, Language } from '../translations';

interface TokenomicsProps {
  lang: Language;
}

const Tokenomics: React.FC<TokenomicsProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0xb0e80e59df429bb9c6a255b628c59097c6f57777";
  const t = translations[lang].tokenomics;

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cardIcons = [
    <Globe className="text-gold-400" />,
    <Database className="text-gold-400" />,
    <Coins className="text-gold-400" />,
    <Ban className="text-gold-400" />
  ];

  return (
    <section className="relative z-10 py-24 px-4 bg-night-800/50 backdrop-blur-sm border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-serif text-center mb-16 text-gold-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-night-900/80 border border-gold-800/30 p-6 rounded-xl flex flex-col items-center text-center hover:border-gold-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4 p-3 bg-gold-900/20 rounded-full">{cardIcons[index]}</div>
              <h3 className="text-gold-400 text-sm mb-2 uppercase tracking-wider">{card.label}</h3>
              <p className="text-xl font-bold text-white">{card.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Contract Address Bar */}
        <motion.div 
          className="max-w-3xl mx-auto bg-gradient-to-r from-night-900 via-[#1e293b] to-night-900 border border-gold-700/40 rounded-2xl p-6 md:p-8 text-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gold-400 mb-4 text-sm uppercase tracking-widest">{t.contract_label}</p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-black/40 p-4 rounded-lg border border-white/10">
            <code className="text-sm md:text-lg text-gold-100 font-mono break-all md:break-normal">
              {contractAddress}
            </code>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-6 py-2 bg-gold-600 text-night-900 rounded-lg font-bold hover:bg-gold-400 transition-colors shrink-0"
            >
              {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
              {copied ? t.copied : t.copy}
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            {t.launch_label}: <span className="text-gold-300 font-semibold">{t.launch_val}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
