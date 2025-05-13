import { motion } from "framer-motion";
import { Gift, Flower, Flower2 } from "lucide-react";
import { useGiftBox } from "../hooks/useGiftBox";

export default function GiftBox() {
  const { isOpened, isAnimating, openGiftBox } = useGiftBox();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative">
      <div className="text-center mb-12 z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-mothersday-pink-dark mb-6 text-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Je Cadeau Wacht!
        </motion.h2>

        <motion.p
          className="text-lg text-mothersday-lavender-dark max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {isOpened ? "Voilà!" : "Tik op het cadeau om het te openen..."}
        </motion.p>
      </div>

      {!isOpened ? (
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openGiftBox}
        >
          <div className="relative cursor-pointer">
            {/* Gift box */}
            <motion.div
              className="w-64 h-64 bg-gradient-to-br from-mothersday-peach-light to-mothersday-peach rounded-2xl shadow-soft flex items-center justify-center"
              animate={
                isAnimating
                  ? {
                      rotateY: 180,
                      scale: [1, 1.1, 0],
                      transition: { duration: 1.2 },
                    }
                  : {}
              }
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
              >
                <Gift
                  size={80}
                  className="text-mothersday-pink"
                  strokeWidth={1.5}
                />
              </motion.div>
            </motion.div>

            {/* Ribbon */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-24 bg-mothersday-pink-dark rounded-full"
              style={{ zIndex: -1 }}
              animate={
                isAnimating
                  ? {
                      rotateZ: 90,
                      scale: 0,
                      transition: { duration: 1 },
                    }
                  : {}
              }
            />
            <motion.div
              className="absolute top-1/2 left-0 -translate-y-1/2 h-10 w-full bg-mothersday-pink-dark rounded-full"
              style={{ zIndex: 1 }}
              animate={
                isAnimating
                  ? {
                      rotateZ: 90,
                      scale: 0,
                      transition: { duration: 1 },
                    }
                  : {}
              }
            />
          </div>
        </motion.div>
      ) : null}

      {isOpened && (
        <motion.div
          className="z-10"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 120,
          }}
        >
          <VoucherPreview />
        </motion.div>
      )}

      {/* Background decoration */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-mothersday-lavender-light to-transparent opacity-30 z-0" />
    </div>
  );
}

function VoucherPreview() {
  // Function to scroll to voucher section
  const scrollToVoucher = () => {
    const voucherSection = document.getElementById("voucher");
    if (voucherSection) {
      voucherSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="w-72 sm:w-80 h-auto aspect-auto bg-white rounded-2xl shadow-lg overflow-hidden relative"
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Decorative top pattern */}
      <div className="h-16 bg-mothersday-pink bg-opacity-20 flex items-center justify-center">
        <div className="flex gap-2">
          <Flower size={24} className="text-mothersday-pink-dark opacity-80" />
          <Flower2 size={24} className="text-mothersday-pink-dark opacity-80" />
          <Flower size={24} className="text-mothersday-pink-dark opacity-80" />
        </div>
      </div>

      <div className="p-6 flex flex-col items-center justify-between h-[calc(100%-4rem)]">
        <h3 className="text-center text-3xl font-dancing text-mothersday-pink-dark mb-4">
          Manicure Cadeaubon
        </h3>

        <div className="w-full border-t border-b border-dashed border-mothersday-pink py-4 my-4 text-center">
          <p className="text-lg font-medium text-mothersday-lavender-dark mb-1">
            Voor:
          </p>
          <p className="text-xl font-bold mb-4">Lieve Moeder</p>

          <p className="text-lg font-medium text-mothersday-lavender-dark mb-1">
            Cadeau:
          </p>
          <p className="text-xl font-bold">Een Luxe Manicure</p>
        </div>

        <div className="flex flex-col items-center mt-auto">
          <p className="mb-4 text-mothersday-lavender-dark text-center text-sm sm:text-base px-2 line-clamp-2">
            Klik hieronder om de couponcode te bekijken
          </p>

          <motion.div
            className="mb-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              className="bg-mothersday-pink text-white rounded-full px-6 py-3 font-medium shadow-soft"
              animate={{
                boxShadow: [
                  "0 4px 12px rgba(255, 182, 193, 0.3)",
                  "0 6px 16px rgba(255, 182, 193, 0.5)",
                  "0 4px 12px rgba(255, 182, 193, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              onClick={scrollToVoucher}
            >
              Bekijk Code →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
