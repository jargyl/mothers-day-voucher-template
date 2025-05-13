import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function ClosingMessage() {
  const text = "Lieve moeder, bedankt voor alles wat je voor mij doet.";

  const writingVariants = {
    hidden: { width: 0 },
    visible: (i: number) => ({
      width: "100%",
      transition: {
        delay: 0.05 * i,
        duration: 0.8,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-mothersday-cream to-mothersday-background opacity-30 z-0" />

      <motion.div
        className="text-center max-w-lg z-10 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-mothersday-pink-dark mb-6 text-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Van Harte
          </motion.h2>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-mothersday-pink-light relative">
          {/* Decorative elements */}
          <div className="absolute -top-3 -right-3">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <Heart size={32} fill="#FFB6C1" color="#FFB6C1" />
            </motion.div>
          </div>

          <div className="absolute -bottom-3 -left-3">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, -5, 0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                delay: 1,
              }}
            >
              <Heart size={32} fill="#FFB6C1" color="#FFB6C1" />
            </motion.div>
          </div>

          {/* Handwritten message with animation */}
          <div className="font-dancing text-xl text-mothersday-lavender-dark leading-relaxed">
            {text.split(" ").map((word, i) => (
              <div key={i} className="inline-block mr-[0.3em] overflow-hidden">
                <motion.div
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={writingVariants}
                  className="inline-block"
                >
                  {word}
                </motion.div>
              </div>
            ))}
          </div>

          <motion.div
            className="mt-6 text-right font-dancing text-2xl text-mothersday-pink-dark"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Met liefs,
            <br />
            Je Kind
          </motion.div>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-mothersday-pink-dark hover:text-mothersday-pink transition-colors font-medium flex flex-col items-center"
          >
            <span className="mb-2">Terug naar het begin</span>
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <path d="m18 15-6-6-6 6" />
            </motion.svg>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
