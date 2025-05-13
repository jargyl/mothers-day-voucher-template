
import { motion } from "framer-motion";
import { Heart, Flower, Flower2 } from "lucide-react";
import { useMemo } from "react";

interface FloatingElementsProps {
  count?: number;
  type?: "hearts" | "flowers" | "mixed";
  color?: string;
}

export default function FloatingElements({ 
  count = 10, 
  type = "mixed",
  color = "#FFB6C1"
}: FloatingElementsProps) {
  const elements = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const delay = Math.random() * 2;
      const duration = 3 + Math.random() * 5;
      const size = 16 + Math.random() * 14;
      const opacity = 0.3 + Math.random() * 0.5;
      
      let Element;
      
      if (type === "hearts") {
        Element = Heart;
      } else if (type === "flowers") {
        Element = Math.random() > 0.5 ? Flower : Flower2;
      } else {
        // mixed
        const icons = [Heart, Flower, Flower2];
        Element = icons[Math.floor(Math.random() * icons.length)];
      }
      
      return {
        id: i,
        left,
        top,
        delay,
        duration,
        size,
        opacity,
        Element,
      };
    });
  }, [count, type]);

  return (
    <div className="absolute inset-0 overflow-hidden z-[1] pointer-events-none">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute"
          style={{
            left: el.left,
            top: el.top,
            opacity: el.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          <el.Element size={el.size} color={color} />
        </motion.div>
      ))}
    </div>
  );
}
