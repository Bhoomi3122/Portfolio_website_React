import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projectsData from "./projects.json";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const { projects } = projectsData;
  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.status.toLowerCase() === filter);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-4 text-[#b1ddf2]"
      >
        My Projects
      </motion.h1>
      <motion.div
  className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#7dd3fc] via-[#a5b4fc] via-40% via-[#f9a8d4] to-[#22d3ee]"
  initial={{ width: 0 }}
  animate={{ width: "6rem" }}
  transition={{ delay: 0.4, duration: 1 }}
/>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-center text-text-color mb-8 max-w-2xl mx-auto"
      >
        Explore my latest work and side projects that showcase my skills and passion for development.
      </motion.p>
      
  <div className="flex justify-center mb-8" id="projects">
  <div className="inline-flex rounded-md shadow">
    <button
      onClick={() => setFilter("all")}
      className={`px-6 py-2 text-sm font-medium rounded-l-md transition-all duration-300 ${
        filter === "all"
          ? "bg-gradient-to-r from-primary-gradient-1 to-primary-gradient-2 text-primary-dark font-semibold border border-cyan-300 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]"
          : "bg-primary-dark text-text-color border border-white border-opacity-30 hover:cursor-pointer"
      }`}
    >
      All
    </button>
    <button
      onClick={() => setFilter("completed")}
      className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
        filter === "completed"
          ? "bg-gradient-to-r from-primary-gradient-1 to-primary-gradient-2 text-primary-dark font-semibold border border-cyan-300 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]"
          : "bg-primary-dark text-text-color border-t border-b border-white border-opacity-30 hover:cursor-pointer"
      }`}
    >
      Completed
    </button>
    <button
      onClick={() => setFilter("pending")}
      className={`px-6 py-2 text-sm font-medium rounded-r-md transition-all duration-300 ${
        filter === "pending"
          ? "bg-gradient-to-r from-primary-gradient-1 to-primary-gradient-2 text-primary-dark font-semibold border border-cyan-300 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]"
          : "bg-primary-dark text-text-color border border-white border-opacity-30 hover:cursor-pointer"
      }`}
    >
      Pending
    </button>
  </div>
</div>


      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;