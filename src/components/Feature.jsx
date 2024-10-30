import { motion } from "framer-motion";
import React, { useState } from "react";

const Feature = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  const projects = [
    { name: "CARDBOARD SPACESHIPS", imgSrc: "/img/div1.png" },
    { name: "AH2 AND MATT HORN", imgSrc: "/img/div2a.png" },
  ];

  const project = [
    { name: "FYDE", imgSrc: "/img/fyde.png" },
    { name: "VISE", imgSrc: "/img/Vise.jpg" },
  ];

  const project2 = [
    { name: "TRAWA", imgSrc: "/img/div3.jpg" },
    { name: "PREMIUM BLEND", imgSrc: "/img/div3a.png" },
  ];

  return (
    <div className="w-full py-20 bg-[#202324]">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-6xl font-serif text-white tracking-tight">Featured Projects:</h1>
      </div>


      {[projects, project, project2].map((group, groupIndex) => (
        <div className="px-20 py-10" key={groupIndex}>
          <div className="flex flex-row gap-10">
            {group.map((project, index) => (
              <div
                key={index}
                className="cardcontainer w-full sm:w-1/2 md:w-1/2 lg:w-1/2 h-[75vh] relative"
                onMouseEnter={() => setHoveredCard(project.name)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="card w-full h-full rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.05 }} 
                  transition={{ duration: 0.3 }}
                >
                  <img className="w-full h-full object-cover" src={project.imgSrc} alt={project.name} />
                  {hoveredCard === project.name && (
                    <motion.h1
                      className="absolute inset-0 flex items-center justify-center text-[#c6e947] z-[9] text-5xl font-bold leading-none tracking-tight"
                      variants={textAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      {project.name}
                    </motion.h1>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
