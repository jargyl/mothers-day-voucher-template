
import { useState } from "react";

export function useGiftBox() {
  // States for the gift box interaction
  const [isOpened, setIsOpened] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Function to handle gift box opening
  const openGiftBox = () => {
    if (isAnimating || isOpened) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setIsOpened(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Animation timing
    }, 500); // Delay before showing content
  };
  
  return { isOpened, isAnimating, openGiftBox };
}
