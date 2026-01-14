import React from 'react';
import { Twitter, Send, MessagesSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-night-900 border-t border-white/10 pt-16 pb-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        <h3 className="text-2xl font-serif text-gold-200 mb-8">加入我们的星系</h3>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
          <a 
            href="https://x.com/heyibinance/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 text-gray-400 hover:text-gold-400 transition-colors"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold-500 group-hover:bg-gold-500/10 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] transition-all">
              <Twitter size={24} />
            </div>
            <span className="text-sm">Twitter/X</span>
          </a>

          <a 
            href="https://t.me/XXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 text-gray-400 hover:text-gold-400 transition-colors"
          >
             <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold-500 group-hover:bg-gold-500/10 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] transition-all">
              <Send size={24} />
            </div>
            <span className="text-sm">Telegram</span>
          </a>

           <div className="group flex flex-col items-center gap-3 text-gray-400 hover:text-gold-400 transition-colors cursor-pointer" title="QQ群: 444444444">
             <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold-500 group-hover:bg-gold-500/10 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] transition-all">
              <MessagesSquare size={24} />
            </div>
            <span className="text-sm">QQ: 444444444</span>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-8"></div>

        <p className="text-gray-500 text-sm">
          版权所有 © 2026 萤火之光社区 | Firefly Light Community
        </p>
      </div>
    </footer>
  );
};

export default Footer;