"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

interface EnvelopeIntroProps {
  onComplete: () => void;
}

export default function EnvelopeIntro({ onComplete }: EnvelopeIntroProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Block scroll while envelope is visible
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    
    // Play envelope opening sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.warn("Error playing sound:", err);
      });
    }
    
    // Show card after flap opens
    setTimeout(() => {
      setShowCard(true);
    }, 500);

    // Start exit animation
    setTimeout(() => {
      setIsExiting(true);
    }, 1800);

    // Complete and remove overlay
    setTimeout(() => {
      onComplete();
    }, 2400);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Soft gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #f9f5f2 0%, #f5ede8 50%, #f0e6e0 100%)",
        }}
      />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 90, 90, 0.03) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-dusty-rose/8 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-vintage-pink/10 blur-3xl" />
      </div>

      {/* Envelope container */}
      <motion.div 
        className="relative cursor-pointer select-none"
        onClick={handleOpen}
        whileHover={!isOpening ? { scale: 1.02 } : {}}
        whileTap={!isOpening ? { scale: 0.98 } : {}}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
        style={{ perspective: "1200px" }}
      >
        {/* Envelope wrapper for 3D effect */}
        <div 
          className="relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* === ENVELOPE BODY === */}
          <div className="relative w-[300px] h-[200px] sm:w-[360px] sm:h-[240px] md:w-[400px] md:h-[270px]">
            
            {/* Main envelope base */}
            <div 
              className="absolute inset-0 rounded-sm"
              style={{
                background: "linear-gradient(180deg, #fefcfa 0%, #f9f6f3 100%)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2), 0 12px 24px -8px rgba(0, 0, 0, 0.12), inset 0 0 0 1px rgba(180, 160, 140, 0.3)",
                border: "1px solid rgba(180, 160, 140, 0.25)",
              }}
            />

            {/* Left triangle fold */}
            <div 
              className="absolute bottom-0 left-0"
              style={{
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderWidth: "0 0 200px 150px",
                borderColor: "transparent transparent #faf7f4 transparent",
              }}
            />
            <div 
              className="absolute bottom-0 left-0 hidden sm:block"
              style={{
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderWidth: "0 0 240px 180px",
                borderColor: "transparent transparent #faf7f4 transparent",
              }}
            />

            {/* Right triangle fold */}
            <div 
              className="absolute bottom-0 right-0"
              style={{
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderWidth: "0 150px 200px 0",
                borderColor: "transparent #f8f5f2 transparent transparent",
              }}
            />
            <div 
              className="absolute bottom-0 right-0 hidden sm:block"
              style={{
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderWidth: "0 180px 240px 0",
                borderColor: "transparent #f8f5f2 transparent transparent",
              }}
            />

            {/* Fold line shadows for depth */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rosewood/5 to-transparent"
              style={{ bottom: "45%" }}
            />

            {/* === CARD INSIDE === */}
            <AnimatePresence>
              {showCard && (
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-[80%] bg-white rounded-t-md overflow-hidden"
                  style={{ 
                    bottom: "15%",
                    boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
                  }}
                  initial={{ y: 0 }}
                  animate={{ y: -160 }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="p-5 sm:p-6 text-center bg-gradient-to-b from-white via-white to-blush/20">
                    {/* Decorative line */}
                    <div className="w-12 h-px bg-dusty-rose/30 mx-auto mb-3" />
                    
                    <p className="text-rosewood/50 text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-3">
                      {siteConfig.wedding.day} · {siteConfig.wedding.month} · {siteConfig.wedding.year}
                    </p>
                    
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-rosewood leading-tight">
                      {siteConfig.couple.shortName1}
                    </h2>
                    <p className="font-serif text-lg sm:text-xl text-mulberry/70 my-0.5">&</p>
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-rosewood leading-tight">
                      {siteConfig.couple.shortName2}
                    </h2>
                    
                    {/* Decorative line */}
                    <div className="w-12 h-px bg-dusty-rose/30 mx-auto mt-3 mb-2" />
                    
                    <p className="text-rosewood/40 text-xs sm:text-sm italic">
                      Te invitamos a celebrar
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* === TOP FLAP === */}
            <motion.div
              className="absolute -top-[1px] left-0 right-0"
              style={{ 
                transformStyle: "preserve-3d",
                transformOrigin: "top center",
                zIndex: isOpening ? -1 : 10,
              }}
              initial={{ rotateX: 0 }}
              animate={isOpening ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {/* Flap - front side (visible when closed) */}
              <svg 
                viewBox="0 0 400 135" 
                className="w-full h-auto"
                style={{ 
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.12))",
                  backfaceVisibility: "hidden",
                }}
              >
                <defs>
                  <linearGradient id="flapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f5f1ed" />
                    <stop offset="100%" stopColor="#ebe6e0" />
                  </linearGradient>
                </defs>
                <path 
                  d="M0 0 L200 135 L400 0 Z" 
                  fill="url(#flapGradient)"
                />
                {/* Border outline */}
                <path 
                  d="M0 0 L200 135 L400 0" 
                  fill="none" 
                  stroke="rgba(180, 160, 140, 0.35)" 
                  strokeWidth="1.5"
                />
                {/* Inner highlight */}
                <path 
                  d="M8 2 L200 128 L392 2" 
                  fill="none" 
                  stroke="rgba(255,255,255,0.4)" 
                  strokeWidth="1"
                />
              </svg>
              
              {/* Flap - back side (visible when opened, folds behind envelope) */}
              <svg 
                viewBox="0 0 400 135" 
                className="absolute top-0 left-0 w-full h-auto"
                style={{
                  transform: "rotateX(180deg)",
                  backfaceVisibility: "hidden",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                }}
              >
                <defs>
                  <linearGradient id="flapBackGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#e8e2da" />
                    <stop offset="100%" stopColor="#ddd6cc" />
                  </linearGradient>
                </defs>
                {/* Inverted triangle - point at top */}
                <path 
                  d="M0 135 L200 0 L400 135 Z" 
                  fill="url(#flapBackGradient)"
                />
                {/* Border outline */}
                <path 
                  d="M0 135 L200 0 L400 135" 
                  fill="none" 
                  stroke="rgba(180, 160, 140, 0.3)" 
                  strokeWidth="1.5"
                />
              </svg>
            </motion.div>

            {/* === WAX SEAL === */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 z-20"
              style={{ top: "30%" }}
              initial={{ scale: 1, rotate: 0 }}
              animate={isOpening ? { 
                scale: 0.5, 
                opacity: 0,
                rotate: -15,
                y: 20,
              } : { 
                scale: 1, 
                opacity: 1,
                rotate: 0,
                y: 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Wax seal PNG image */}
              <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]">
                <Image
                  src="/sello.png"
                  alt="Sello de cera"
                  width={120}
                  height={120}
                  className="object-contain drop-shadow-lg w-full h-full"
                  priority
                  fetchPriority="high"
                />
              </div>
            </motion.div>

            {/* Bottom fold overlay for depth */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none rounded-b-sm"
              style={{
                background: "linear-gradient(to top, #faf7f4 0%, #faf7f4 60%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* "Tap to open" hint - No animation delay for faster LCP */}
        <div 
          className="text-center mt-8"
          style={{ opacity: isOpening ? 0 : 1, transition: 'opacity 0.3s ease-out' }}
        >
          <p className="text-rosewood/50 text-sm tracking-[0.15em] font-light">
            Toca para abrir
          </p>
          {/* Subtle animated hint */}
          <motion.div
            className="w-6 h-6 mx-auto mt-3 text-rosewood/30"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.591M6 10.5H3.75m4.007-4.243l-1.59-1.591" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-dusty-rose/15 rounded-tl-sm" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-dusty-rose/15 rounded-tr-sm" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-dusty-rose/15 rounded-bl-sm" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-dusty-rose/15 rounded-br-sm" />

      {/* Envelope opening sound - preload metadata only for faster initial load */}
      <audio
        ref={audioRef}
        src="/sounds/envelope-open.mp3"
        preload="metadata"
      />
    </motion.div>
  );
}
