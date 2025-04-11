import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="py-8 mt-12 border-t border-purple-800 bg-black bg-opacity-30"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Bhoomi
            </span>
            <p className="text-gray-400 mt-1 text-sm">
              &copy; {currentYear} All Rights Reserved
            </p>
          </motion.div>
          
          <motion.div className="flex flex-col md:flex-row items-center">
            <p className="text-gray-400 text-sm text-center md:text-right">
              Made with <span className="text-pink-400">❤</span> using React & Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;