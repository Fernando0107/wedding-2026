"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" background="white">
      <Container size="md">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-rosewood text-center mb-16">
            {siteConfig.content.faq.title}
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {siteConfig.content.faq.questions.map((item, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="border-2 border-vintage-pink rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-blush transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg md:text-xl font-serif text-rosewood pr-4">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-dusty-rose flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="px-6 py-4 bg-blush border-t-2 border-vintage-pink">
                        <p className="text-mauve font-sans leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

