
import { motion } from "framer-motion";
import FloatingElements from "./FloatingElements";

export default function WelcomeScreen() {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <FloatingElements count={15} type="mixed" color="#FFB6C1" />
      
      <motion.div
        className="text-center z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.3,
          duration: 0.8,
          ease: "easeOut" 
        }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-mothersday-pink-dark mb-4 text-shadow">
          Fijne Moederdag!
        </h1>
        
        <motion.p 
          className="text-xl mb-8 text-mothersday-lavender-dark max-w-md mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Er staat een speciaal cadeautje voor je klaar...
        </motion.p>
        
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <p className="text-mothersday-pink-dark opacity-80 text-lg mb-2">Scroll naar beneden</p>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="mx-auto w-fit"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mothersday-pink-dark opacity-80">
              <path d="M7 13l5 5 5-5"/>
              <path d="M7 6l5 5 5-5"/>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
