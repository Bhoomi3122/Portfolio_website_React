import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import profile from '../assets/profile.jpg';

// TypeWriter component
const TypeWriter = ({ texts, typingSpeed = 150, deletingSpeed = 50, delayBetweenTexts = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current text to display
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        // Still typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } 
        // Done typing, start deleting after delay
        else {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      } else {
        // Still deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } 
        // Done deleting, move to next text
        else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <motion.span 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-block"
    >
      {currentText}
      <span className="inline-block w-1 h-6 ml-1 bg-blue-300 animate-pulse"></span>
    </motion.span>
  );
};

// Counter Animation Component
const Counter = ({ targetNumber, duration = 2 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrameId;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * targetNumber));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [targetNumber, duration]);
  
  return <span>{count}</span>;
};

// Main Home Component
function Home() {
  const controls = useAnimation();
  const typingTexts = [
    "I am a Web Developer.",
    "I am a Computer Science Student.",
    "I am a Problem Solver.",
    "I am passionate about AI.",
    "I am a DSA Enthusiast."
  ];
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialIcons = [
    { name: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
    { name: "LinkedIn", icon: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" },
    { name: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
    { name: "Email", icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" }
  ];

  return (
    <section id="home" className="container mx-auto px-4 py-20 md:py-32 bg-navy-900">
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-between gap-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Left column with text */}
        <motion.div className="flex-1" variants={itemVariants}>
          <motion.h2 
            className="text-xl md:text-2xl font-light text-blue-200 mb-3"
            variants={itemVariants}
          >
            Hello, I'm
          </motion.h2>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400 mb-4"
            variants={itemVariants}
          >
            Bhoomi
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-3xl font-medium text-gray-100 mb-6"
            variants={itemVariants}
          >
            <TypeWriter texts={typingTexts} />
          </motion.div>
          
          <motion.p 
            className="text-gray-300 mb-8 max-w-lg"
            variants={itemVariants}
          >
            Computer Science student passionate about web development, algorithms, and creating intuitive user experiences.
          </motion.p>
          
          <motion.div 
            className="flex space-x-4 mb-8"
            variants={itemVariants}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-blue-400 text-blue-200 font-medium py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="flex items-center mb-6 bg-blue-900 bg-opacity-30 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-fit"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="mr-4 text-4xl font-bold text-blue-300">
              <Counter targetNumber={700} />+
            </div>
            <div className="text-gray-200">
              <div className="text-sm uppercase tracking-wide">DSA Problems</div>
              <div className="font-medium">Solved on Various Platforms</div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right column with image */}
        <motion.div 
          className="flex-1 flex justify-center"
          variants={itemVariants}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-2 bg-navy-800 bg-opacity-40 backdrop-blur-sm rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Placeholder for Profile Image - Replace with actual image in production */}
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-blue-900 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <img src={profile}/>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Social Media Icons */}
      <motion.div 
        className="mt-16 flex justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        {socialIcons.map((social, index) => (
          <motion.a
            key={index}
            href="#"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-900 bg-opacity-30 p-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
            title={social.name}
          >
            <svg 
              className="w-6 h-6 text-blue-100 fill-current" 
              viewBox="0 0 24 24"
            >
              <path d={social.icon} />
            </svg>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default Home;