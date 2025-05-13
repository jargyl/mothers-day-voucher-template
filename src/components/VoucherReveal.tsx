import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, LockKeyhole } from "lucide-react";
import Password from "./Password";

interface VoucherRevealProps {
  voucherCode?: string;
}

export default function VoucherReveal({
  voucherCode = "SAMPLE2025",
}: VoucherRevealProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [codeRevealed, setCodeRevealed] = useState(false);

  const downloadVoucher = () => {
    if (!codeRevealed) {
      setShowPassword(true);
      return;
    }

    // Create a link to download the voucher
    const voucherPath = "/vouchers/manicure-voucher.pdf";
    const link = document.createElement("a");
    link.href = voucherPath;
    link.download = "manicure-voucher.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative">
      <AnimatePresence>
        {showPassword && (
          <Password
            correctPassword=""
            onSuccess={() => {
              setShowPassword(false);
              setCodeRevealed(true);
            }}
            onClose={() => setShowPassword(false)}
          />
        )}
      </AnimatePresence>

      <div className="text-center mb-12 z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-mothersday-pink-dark mb-6 text-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Je Manicurebon
        </motion.h2>

        <motion.p
          className="text-lg text-mothersday-lavender-dark max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Een moment van ontspanning, speciaal voor jou
        </motion.p>
      </div>

      <motion.div
        className="w-full max-w-md z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Voucher header with decorative pattern */}
          <div className="h-20 bg-gradient-to-r from-mothersday-pink-light to-mothersday-pink flex items-center justify-center">
            <h3 className="text-3xl text-white font-dancing font-bold">
              Manicure Cadeaubon
            </h3>
          </div>

          {/* Voucher content */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col space-y-4">
              {/* Details */}
              <div className="bg-mothersday-cream bg-opacity-50 p-4 rounded-lg">
                <h4 className="font-medium text-mothersday-pink-dark">
                  Cadeau Details:
                </h4>
                <p className="text-mothersday-lavender-dark mt-2">
                  Een luxe manicure behandeling bij{" "}
                  <a
                    href="https://example.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mothersday-pink-dark font-medium underline hover:no-underline"
                  >
                    Sample Nail Studio
                  </a>{" "}
                  in Amsterdam.
                </p>
              </div>

              {/* Code section */}
              <div className="border border-dashed border-mothersday-pink-light p-4 rounded-lg text-center">
                <p className="text-mothersday-lavender-dark mb-2">
                  Je persoonlijke couponcode:
                </p>

                {codeRevealed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <p className="font-bold text-2xl tracking-wider text-mothersday-pink-dark font-mono">
                      {voucherCode}
                    </p>
                  </motion.div>
                ) : (
                  <div
                    className="bg-mothersday-lavender-light bg-opacity-40 py-3 px-4 rounded flex items-center justify-center gap-2 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  >
                    <LockKeyhole
                      size={18}
                      className="text-mothersday-lavender-dark"
                    />
                    <span className="text-mothersday-lavender-dark font-medium">
                      Klik om code te onthullen
                    </span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <motion.button
                  className="flex-1 bg-mothersday-pink text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 shadow-soft"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPassword(true)}
                  disabled={codeRevealed}
                >
                  <LockKeyhole size={18} />
                  <span>{codeRevealed ? "Code Onthuld!" : "Toon Code"}</span>
                </motion.button>

                <motion.button
                  className={`flex-1 ${
                    codeRevealed
                      ? "bg-mothersday-lavender-dark"
                      : "bg-mothersday-lavender-dark bg-opacity-50"
                  } text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 shadow-soft`}
                  whileHover={codeRevealed ? { scale: 1.03 } : {}}
                  whileTap={codeRevealed ? { scale: 0.98 } : {}}
                  onClick={downloadVoucher}
                >
                  <Download size={18} />
                  <span>Download Bon</span>
                </motion.button>
              </div>
            </div>

            {/* Validity note */}
            <p className="text-xs text-mothersday-lavender-dark opacity-70 text-center mt-6">
              Deze cadeaubon is geldig tot 31 december 2025
            </p>
          </div>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-mothersday-peach-light to-transparent opacity-30 z-0" />
    </div>
  );
}
