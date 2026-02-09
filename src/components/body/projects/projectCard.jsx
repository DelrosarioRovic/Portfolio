import React, { useState } from "react";
import { BsArrowUpRight, BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  projectColor,
  projectUrl,
  projectImg,
  projectTitle,
  projectDcrp,
  projectLang,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-500"
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${projectColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl -z-10`} />
      
      <a 
        href={projectUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block p-5 h-full"
      >
        {/* Image container - FIXED height with object-contain to show full image */}
        <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-gray-800 to-gray-900 min-h-[200px] max-h-[250px] md:min-h-[220px] md:max-h-[280px] w-full flex items-center justify-center">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
          
          {/* Image - object-contain shows entire image */}
          <motion.img
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={projectImg}
            alt={projectTitle}
            className="relative z-10 max-h-full w-auto max-w-full object-contain p-2 rounded-2xl"
            loading="lazy"
            style={{ maxHeight: "220px" }}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
          
          {/* Visit button overlay */}
          <div className="absolute top-4 right-4 z-30">
            <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              <BsLink45Deg className="w-4 h-4" />
              Visit Project
            </div>
          </div>
          
          {/* Corner accent */}
          <div className={`absolute bottom-0 left-0 w-16 h-1 ${projectColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>

        {/* Title and description */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {projectTitle}
            </h3>
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 group-hover:text-white"
            >
              <BsArrowUpRight className={`w-6 h-6 ${ isHovered &&  "text-blue-300"}`} />
            </motion.div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {projectDcrp}
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-6 pt-6 border-t border-gray-800/50">
          <div className="flex flex-wrap gap-2">
            {projectLang.map((language, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`px-3 py-1.5 text-xs font-medium rounded-full backdrop-blur-sm border transition-all duration-300
                  ${isHovered 
                    ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' 
                    : 'bg-gray-800/50 text-gray-300 border-gray-700/50'
                  }`}
              >
                {language}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Hover gradient border */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${projectColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} />
      </a>
    </motion.div>
  );
}

export default ProjectCard;