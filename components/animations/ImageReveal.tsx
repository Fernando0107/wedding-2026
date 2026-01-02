"use client";

import { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ImageRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ImageReveal({
  children,
  delay = 0,
  className,
}: ImageRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.95,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.6, 0.05, 0.01, 0.9],
          },
        },
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

