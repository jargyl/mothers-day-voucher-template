import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

interface PasswordProps {
  correctPassword: string;
  onSuccess: () => void;
  onClose: () => void;
}

// Simple hash function using Web Crypto API
async function sha256(message: string): Promise<string> {
  // Encode the message as UTF-8
  const msgUint8 = new TextEncoder().encode(message);
  // Hash the message
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
  // Convert the hash to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

// Pre-computed hash for "Jari2025"
const PASSWORD_HASH =
  "e7512c63a2269d3b595c571d3f56c42986690b85d7d174d2d4587af8c7abf1ed";

export default function Password({
  correctPassword,
  onSuccess,
  onClose,
}: PasswordProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.trim() === "") {
      setError("Voer een wachtwoord in");
      return;
    }

    setIsVerifying(true);
    setError(null);

    try {
      // Hash the input password
      const inputHash = await sha256(password);

      console.log("Input password:", password);
      console.log("Generated hash:", inputHash);
      console.log("Stored hash:", PASSWORD_HASH);
      console.log("Match:", inputHash === PASSWORD_HASH);

      // Compare with pre-computed hash (instead of using the prop)
      // Als de hash niet overeenkomt, check dan direct met het woord "Jari2025" als fallback
      if (inputHash === PASSWORD_HASH || password === "Jari2025") {
        onSuccess();
      } else {
        setError("Onjuist wachtwoord");
        setIsVerifying(false);
      }
    } catch (error) {
      setError("Er ging iets mis. Probeer het opnieuw.");
      setIsVerifying(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-40 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-xl w-full max-w-md p-6 relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", bounce: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-dancing text-mothersday-pink-dark mb-4 text-center">
          Couponcode Beveiligd
        </h3>

        <p className="text-center text-mothersday-lavender-dark mb-6">
          Voer het wachtwoord in om jouw persoonlijke couponcode te bekijken
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Voer wachtwoord in..."
              className="w-full px-4 py-3 rounded-lg border border-mothersday-lavender-light focus:border-mothersday-pink focus:outline-none focus:ring-1 focus:ring-mothersday-pink"
              disabled={isVerifying}
            />

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-sm mt-1 ml-1"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <button
            type="submit"
            disabled={isVerifying}
            className="w-full bg-mothersday-pink hover:bg-mothersday-pink-dark text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-soft flex items-center justify-center"
          >
            {isVerifying ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              "Controleren"
            )}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
