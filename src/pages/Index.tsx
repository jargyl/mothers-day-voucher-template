
import { useRef } from "react";
import WelcomeScreen from "../components/WelcomeScreen";
import GiftBox from "../components/GiftBox";
import VoucherReveal from "../components/VoucherReveal";
import ClosingMessage from "../components/ClosingMessage";

const Index = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={contentRef} className="bg-mothersday-background min-h-screen">
      <section id="welcome">
        <WelcomeScreen />
      </section>
      
      <section id="gift">
        <GiftBox />
      </section>
      
      <section id="voucher">
        <VoucherReveal />
      </section>
      
      <section id="closing">
        <ClosingMessage />
      </section>
    </div>
  );
};

export default Index;
