import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const ResumeDownload: React.FC = () => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // prevent immediate download
    const confirmDownload = window.confirm("Do you want to download the resume?");
    if (confirmDownload) {
      // Trigger the download manually
      const link = document.createElement("a");
      link.href = "/NAJIMNT_resume.pdf";
      link.download = "NAJIMNT_resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <motion.a
      href="/NAJIMNT_resume.pdf"
      onClick={handleDownload} // added click handler
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="group relative flex items-center justify-center px-6 py-3 rounded-full 
        font-semibold backdrop-blur-md text-white border border-white/20 shadow-lg 
        transition-all duration-300 overflow-hidden hover:shadow-neon-blue/25 
        hover:border-neon-blue/50 text-sm sm:text-base"
    >
      {/* Shine Effect */}
      <div
        className="absolute inset-0 bg-white/10 -translate-x-full 
        group-hover:translate-x-full transition-transform duration-500 skew-x-12"
      />

      <span className="relative z-10 flex items-center space-x-2">
        <Download size={18} />
        <span>Resume</span>
      </span>
    </motion.a>
  );
};

export default ResumeDownload;

