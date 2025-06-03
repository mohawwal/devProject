import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; 

const Projects = ({ projects = [] }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY - window.innerHeight * 0.7;
      setScrollY(offset > 0 ? offset : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-[#777]">
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        const rawScrollOffset = isEven ? scrollY * 0.2 : -scrollY * 0.2;

        const cycleDistance = 400;
        const scrollOffset = rawScrollOffset % cycleDistance;

        const translateStyle =
          typeof window !== "undefined" && window.innerWidth >= 768
            ? { transform: `translateX(${scrollOffset}px)` }
            : {};

        return (
          <div
            key={index}
            className="h-[280px] border-y-[0.5px] border-[#aaa] flex flex-col justify-between"
          >
            <div className="h-[30%] hover:text-[#777] text-[12px] font-sauce opacity-85 w-full flex items-center justify-around">
              {index === 0 && (
                <span>
                  FEATURED / <br /> PROJECTS ({projects.length})
                </span>
              )}
              <span>
                {project.role} / <br /> {project.specification}
              </span>
            </div>

            <div
              className={`font-bebas ${
                isEven ? "text-left" : "text-right"
              } w-full px-8 cursor-default`}
              style={translateStyle}
            >
              <span className="clamp-span block hover:text-[#E34234] transition-all duration-300 ease-in-out hover:scale-105">
                {project.external ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {project.title}
                  </a>
                ) : (
                  <Link to={`/mobile/${project.title}`} className="block">
                    {project.title}
                  </Link>
                )}
              </span>
            </div>
            <div className="h-[20%]"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
