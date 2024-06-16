import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons library

import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="h-full bg-black/60">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* Official Ensemble AI */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* Official Ensemble AI heading */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Official
          </motion.h2>

          {/* buttons for Official Ensemble AI */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto items-center"
          >
            {/* Instagram */}
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent"
              onClick={() =>
                handleRedirect("https://www.instagram.com/ensembleaico1/")
              }
            >
              <FaInstagram className="text-[22px] text-pink-500" />
              <BsArrowRight className="ml-2 text-[22px]" />
            </button>

            {/* LinkedIn */}
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent"
              onClick={() =>
                handleRedirect(
                  "https://www.linkedin.com/company/ensemble-ai-co"
                )
              }
            >
              <FaLinkedin className="text-[22px] text-blue-500" />
              <BsArrowRight className="ml-2 text-[22px]" />
            </button>

            {/* Email */}
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent"
              onClick={() =>
                handleRedirect("mailto:ensembleaico1@gmail.com")
              }
            >
              <FaEnvelope className="text-[22px] text-red-500" />
              <BsArrowRight className="ml-2 text-[22px]" />
            </button>
          </motion.div>
        </div>

        {/* Vertical Divider */}
        <div className="border-l-2 border-gray-400 h-[200px] mx-12 hidden xl:block"></div>

        {/* Co-Founders */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* Co-Founders heading */}
          <motion.h2
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            M Mahad Sheikh
          </motion.h2>

          {/* buttons for Co-Founders */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto items-center"
          >
            {/* Instagram Mahad */}
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent"
              onClick={() =>
                handleRedirect("https://www.instagram.com/mahad.08/")
              }
            >
              <FaInstagram className="text-[22px] text-pink-500" />
              <BsArrowRight className="ml-2 text-[22px]" />
            </button>

            {/* LinkedIn Mahad */}
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent"
              onClick={() =>
                handleRedirect(
                  "https://www.linkedin.com/in/muhammad-mahad-sheikh-989a2924b/"
                )
              }
            >
              <FaLinkedin className="text-[22px] text-blue-500" />
              <BsArrowRight className="ml-2 text-[22px]" />
            </button>

            {/* Email Mahad */}
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent"
              onClick={() =>
                handleRedirect("mailto:mahad112002@gmail.com")
              }
            >
              <FaEnvelope className="text-[22px] text-red-500" />
              <BsArrowRight className="ml-2 text-[22px]" />
            </button>

            {/* WhatsApp Mahad */}
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent"
              onClick={() => handleRedirect("https://wa.me/923150144044")}
            >
              <FaWhatsapp className="text-[22px] text-green-500" />
              <BsArrowRight className="ml-2 text-[22px]" />
            </button>
          </motion.div>
        </div>

        {/* Vertical Divider */}
        <div className="border-l-2 border-gray-400 h-[200px] mx-12 hidden xl:block"></div>

        {/* Co-Founder Wajeeh */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* Co-Founder Wajeeh heading */}
          <motion.h2
            variants={fadeIn("up", 1.0)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Wajeeh ul Hassan
          </motion.h2>

          {/* buttons for Co-Founder Wajeeh */}
          <motion.div
            variants={fadeIn("up", 1.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto items-center"
          >
            {/* Instagram Wajeeh */}
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent"
              onClick={() =>
                handleRedirect("https://www.instagram.com/wajeehulhassanr/")
              }
            >
              <FaInstagram className="text-[22px] text-pink-500" />
              <BsArrowRight className="ml-2 text-[22px]" />
            </button>

            {/* LinkedIn Wajeeh */}
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent"
              onClick={() =>
                handleRedirect(
                  "https://www.linkedin.com/in/wajeehulhassanr"
                )
              }
            >
              <FaLinkedin className="text-[22px] text-blue-500" />
              <BsArrowRight className="ml-2 text-[22px]" />
            </button>

            {/* Email Wajeeh */}
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent"
              onClick={() =>
                handleRedirect("mailto:wajeehulhassanr@gmail.com")
              }
            >
              <FaEnvelope className="text-[22px] text-red-500" />
              <BsArrowRight className="ml-2 text-[22px]" />
            </button>

            {/* WhatsApp Wajeeh */}
            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent"
              onClick={() => handleRedirect("https://wa.me/923105589303")}
            >
              <FaWhatsapp className="text-[22px] text-green-500" />
              <BsArrowRight className="ml-2 text-[22px]" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
