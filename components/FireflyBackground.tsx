import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const FireflyBackground: React.FC = () => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    // Generate random fireflies
    const count = 30;
    const newFireflies: Firefly[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 4 + 2, // 2px to 6px
      duration: Math.random() * 10 + 10, // 10s to 20s
      delay: Math.random() * 5,
    }));
    setFireflies(newFireflies);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-b from-night-900 via-[#0f172a] to-night-900">
      {/* Static Stars */}
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      
      {/* Moving Fireflies */}
      {fireflies.map((firefly) => (
        <motion.div
          key={firefly.id}
          className="absolute rounded-full bg-yellow-400 blur-[1px]"
          style={{
            left: `${firefly.x}%`,
            top: `${firefly.y}%`,
            width: firefly.size,
            height: firefly.size,
            boxShadow: `0 0 ${firefly.size * 2}px #FBC02D`,
          }}
          animate={{
            y: [0, -100, 0], // Move up and down gently
            x: [0, Math.random() * 50 - 25, 0], // Meander horizontally
            opacity: [0, 1, 0.5, 1, 0], // Flicker
          }}
          transition={{
            duration: firefly.duration,
            repeat: Infinity,
            delay: firefly.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FireflyBackground;