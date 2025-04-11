import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaServer, 
  FaCss3Alt,
  FaVial
} from "react-icons/fa";

const iconMap = {
  "React": FaReact,
  "Node.js": FaNodeJs,
  "MongoDB": FaDatabase,
  "Express": FaServer,
  "Tailwind CSS": FaCss3Alt,
  "Framer Motion": FaVial,
  "Vite": FaVial
};

const TechIcon = ({ tech, delay = 0 }) => {
  const Icon = iconMap[tech] || FaVial;
  
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex flex-col items-center"
    >
      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
        <Icon className="text-indigo-600 text-2xl" />
      </div>
      <span className="text-sm text-gray-700">{tech}</span>
    </motion.div>
  );
};

export default TechIcon;