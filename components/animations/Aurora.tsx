"use client";

import { CSSProperties } from "react";

interface AuroraProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Aurora({ className = "", children }: AuroraProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={
            {
              background: `
                radial-gradient(ellipse 80% 50% at 50% -20%, 
                  rgba(249, 233, 233, 0.8), 
                  transparent),
                radial-gradient(ellipse 60% 50% at 80% 60%, 
                  rgba(245, 217, 217, 0.6), 
                  transparent),
                radial-gradient(ellipse 60% 50% at 20% 80%, 
                  rgba(212, 165, 165, 0.5), 
                  transparent),
                radial-gradient(ellipse 80% 50% at 50% 100%, 
                  rgba(247, 229, 229, 0.7), 
                  transparent)
              `,
            } as CSSProperties
          }
        />
        
        {/* Animated Blobs - using CSS animations defined in globals.css */}
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-blush/30 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ animation: "aurora-1 20s ease-in-out infinite" }}
        />
        <div 
          className="absolute top-0 right-1/4 w-96 h-96 bg-vintage-pink/30 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ animation: "aurora-2 25s ease-in-out infinite" }}
        />
        <div 
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-dusty-blush/30 rounded-full mix-blend-multiply filter blur-3xl"
          style={{ animation: "aurora-3 30s ease-in-out infinite" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
