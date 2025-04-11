import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.5 }}
      className="bg-primary-dark rounded-xl border border-primary-gradient-1 border-opacity-30 overflow-hidden shadow-lg hover:shadow-[0_0_18px_rgba(34,211,238,0.3)] transition-all duration-500"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              project.status === "Completed"
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-400"
                : "bg-orange-500/20 text-orange-400 border-orange-400"
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-text-color mb-4 text-sm">{project.shortDescription}</p>

        <div className="mb-5">
  <div className="flex flex-wrap gap-2">
    {project.techStack.slice(0, 3).map((tech, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 * index }}
        className="px-2 py-1 bg-primary-dark border border-primary-gradient-1 border-opacity-30 text-text-color text-xs rounded"
      >
        {tech}
      </motion.span>
    ))}
    {project.techStack.length > 3 && (
      <span className="px-2 py-1 bg-primary-dark border border-primary-gradient-1 border-opacity-30 text-text-color text-xs rounded">
        +{project.techStack.length - 3} more
      </span>
    )}
  </div>
</div>

<Link to={`/projects/${project.id}`}>
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.95 }}
    className="w-full bg-gradient-to-r from-[#f5eaff] to-[#dcd6ff] text-[#1a1a2e] py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
  >
    View More <FiExternalLink className="inline-block text-sm" />
  </motion.button>
</Link>




      </div>
    </motion.div>
  );
};

export default ProjectCard;
