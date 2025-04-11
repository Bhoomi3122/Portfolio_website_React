import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccomplishmentsSection() {
  const [activeTab, setActiveTab] = useState("leadership");
  const [accomplishments, setAccomplishments] = useState({
    leadershipActivities: [],
    achievements: []
  });

  useEffect(() => {
    setAccomplishments({
      leadershipActivities: [
        {
          title: "Project Lead - Web Redesign",
          shortDescription:
            "Led a team of 5 developers to completely redesign our company website, resulting in a 45% increase in conversions.",
          skillsUsed: ["Leadership", "Project Management", "UI/UX", "React"]
        },
        {
          title: "Conference Speaker",
          shortDescription:
            "Delivered keynote presentations at 3 industry conferences, sharing insights on modern web development practices.",
          skillsUsed: ["Public Speaking", "Industry Knowledge", "Presentation Skills"]
        },
        {
          title: "Hackathon Organizer",
          shortDescription:
            "Organized and facilitated a company-wide hackathon with 50+ participants, resulting in 3 new product features.",
          skillsUsed: ["Event Planning", "Team Building", "Problem Solving"]
        },
        {
          title: "Mentorship Program Coordinator",
          shortDescription:
            "Founded and coordinated a mentorship program pairing junior developers with seniors, improving retention by 30%.",
          skillsUsed: ["Mentoring", "Program Development", "Relationship Building"]
        }
      ],
      achievements: [
        {
          title: "Employee of the Year",
          shortDescription:
            "Recognized for outstanding contributions to team productivity and innovative solutions.",
          skillsUsed: ["Innovation", "Productivity", "Technical Excellence"]
        },
        {
          title: "Patent Application",
          shortDescription:
            "Co-authored patent for new algorithm improving system efficiency by 60%.",
          skillsUsed: ["Research", "Innovation", "Technical Writing"]
        },
        {
          title: "Open Source Contributor",
          shortDescription:
            "Major contributor to popular framework with over 10,000 stars on GitHub.",
          skillsUsed: ["Collaboration", "Code Quality", "Documentation"]
        },
        {
          title: "Award-Winning Project",
          shortDescription:
            "Led development of application that won industry recognition for innovative user experience.",
          skillsUsed: ["Leadership", "Innovation", "UX Design"]
        },
        {
          title: "Certification Excellence",
          shortDescription:
            "Achieved highest score in organization on advanced technical certification.",
          skillsUsed: ["Technical Knowledge", "Study Skills", "Dedication"]
        },
        {
          title: "Cost Reduction Initiative",
          shortDescription:
            "Implemented system optimizations that reduced operational costs by 25%.",
          skillsUsed: ["Problem Solving", "System Architecture", "Optimization"]
        }
      ]
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-transparent text-gray-800 dark:text-gray-100">
      <SectionHeader title="Professional Accomplishments" />
      <div className="flex justify-center mb-12">
  <div className="flex p-1 bg-blue-100 dark:bg-gray-700 rounded-full shadow-inner">
    <TabButton
      active={activeTab === "leadership"}
      onClick={() => setActiveTab("leadership")}
      label="Leadership Activities"
    />
    <TabButton
      active={activeTab === "achievements"}
      onClick={() => setActiveTab("achievements")}
      label="Achievements"
    />
  </div>
</div>


<AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {activeTab === "leadership" ? (
      <LeadershipGrid items={accomplishments.leadershipActivities} />
    ) : (
      <AchievementsGrid items={accomplishments.achievements} />
    )}
  </motion.div>
</AnimatePresence>

    </div>
  );
}

function TabButton({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out cursor-pointer overflow-hidden
        ${active
          ? "text-white z-10"
          : "text-blue-800 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-gray-600"
        }`}
    >
      {active && (
        <motion.div
          layoutId="activeTabBackground"
          className="absolute inset-0 rounded-full z-0 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-purple-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}




function SectionHeader({ title }) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-4 bg-clip-text text-[#b1ddf2] bg-gradient-to-r from-teal-400 to-indigo-400 dark:from-teal-300 dark:to-indigo-300">
        {title}
      </h1>
      <motion.div
        className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#7dd3fc] via-[#a5b4fc] via-40% via-[#f9a8d4] to-[#22d3ee]"
        initial={{ width: 0 }}
        animate={{ width: "6rem" }}
        transition={{ delay: 0.4, duration: 1 }}
      />
    </motion.div>
  );
}

function LeadershipGrid({ items }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {items.map((item, index) => (
        <AccomplishmentCard key={index} item={item} index={index} />
      ))}
    </motion.div>
  );
}

function AchievementsGrid({ items }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {items.map((item, index) => (
        <AccomplishmentCard key={index} item={item} index={index} />
      ))}
    </motion.div>
  );
}

function AccomplishmentCard({ item, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const gradientColors = "from-[var(--primary-gradient-1)] to-[var(--primary-gradient-2)]";
  const badgeColors =
    "from-blue-100 to-sky-100 text-blue-800 border-blue-200 dark:from-blue-900/30 dark:to-sky-900/30 dark:text-blue-100 dark:border-blue-700";

  const borderColor = isHovered || isExpanded ? "border-blue-500" : "border-gray-300 dark:border-gray-600";
  const textColor = isHovered || isExpanded ? "text-gray-800 dark:text-white" : "text-gray-700 dark:text-gray-200";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="h-full"
    >
      <motion.div
        className={`rounded-xl shadow-md overflow-hidden h-full cursor-pointer relative border transition-all duration-300 ${borderColor}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{
          y: -5,
          boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        whileTap={{ scale: 0.98 }}
        layout
      >
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${gradientColors} opacity-0 rounded-xl`}
          animate={{ opacity: isHovered ? 0.8 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ zIndex: 0 }}
        />
        <motion.div
          className="absolute inset-0 bg-transparent m-0.5 rounded-lg"
          style={{ zIndex: 1 }}
        />
        <motion.div
          className={`p-6 relative z-10 transition-colors duration-300 ${textColor}`}
          layout
        >
          <motion.div className="flex items-center mb-3" layout>
            <motion.div
              className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradientColors} mr-3 flex items-center justify-center`}
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: index * 0.5 }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-white"
                animate={{ scale: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: index * 0.5 }}
              />
            </motion.div>
            <h3 className="text-lg font-semibold text-[#c5ebfc]">{item.title}</h3>
          </motion.div>

          <motion.p className="mb-4 text-[#f0f3f7]" layout>
            {item.shortDescription}
          </motion.p>

          <motion.div
            className="pt-3 border-t border-gray-200 dark:border-gray-600"
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm mb-3 text-[#7dd3fc] dark:text-gray-400">Skills Used:</p>
            <div className="flex flex-wrap gap-2">
              {item.skillsUsed.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${badgeColors}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    scale: isExpanded ? 1 : 0.8,
                    y: isExpanded ? 0 : 10
                  }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center mt-4"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            layout
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${isHovered ? "text-[#f1f5f9] dark:text-white" : "text-blue-500"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}