import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectSkeleton from "../features/ProjectSkeleton"


const Projects = ({ 
    projects = [], 
    type = "frontend", 
    FeIsLoading = false, 
    FeError = null,
    BeIsLoading = false,
    BeError = null 
  }) => {

  const [scrollY, setScrollY] = useState(0);

  const isLoading = type === "frontend" ? FeIsLoading : BeIsLoading;
  const error = type === "frontend" ? FeError : BeError;
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY - window.innerHeight * 0.7;
      setScrollY(offset > 0 ? offset : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return <ProjectSkeleton count={3} />;
  }

  if(error) {
    return (
      <div className="w-full px-4 md:px-8 lg:px-16 py-12">
        <div className="text-center">
          <div className="text-[#777] text-base">
            {error.message || "Failed to load projects"}
          </div>
        </div>
      </div>
    )
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="w-full px-4 md:px-8 lg:px-16 py-12">
        <div className="text-center text-[#aaa]">
          <div className="text-base">No projects found</div>
          <div className="text-sm mt-2">Projects will appear here once added</div>
        </div>
      </div>
    );
  }

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
            className="group border-y-[0.5px] border-[#aaa] flex flex-col justify-between"
          >
            <div className="h-[30%] pt-3 text-[12.5px] font-sauce opacity-85 w-full flex items-center justify-around">
              {index === 0 ? (
                <>
                  <span>
                    FEATURED / <br /> PROJECTS ({projects.length})
                  </span>
                  <span>
                    {type === 'frontend' ? project.role : project.industry} / <br />
                    {project.stacks?.map((stack, i) => (
                      <span key={i}>{i === 0 ? stack : ` _ ${stack}`}</span>
                    ))}
                  </span>
                </>
              ) : (
                <>
                  <span>
                    {type === 'frontend' ? project.role : project.industry}
                  </span>
                  <span>
                    {project.stacks?.map((stack, i) => (
                      <span key={i}>{i === 0 ? stack : ` _ ${stack}`}</span>
                    ))}
                  </span>
                </>
              )}
            </div>

            <div
              className={`font-bebas ${
                isEven ? "text-left" : "text-right"
              } w-full px-8 cursor-default`}
              style={translateStyle}
            >
              <span className="clamp-span block py-5 group-hover:text-[#E34234] transition-all duration-300 ease-in-out group-hover:scale-105">
                {type === "frontend" ? (
                  <a
                    href={project.project_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {project.project_name}
                  </a>
                ) : (
                  <Link to={`/mobile/${project.id}`} className="block">
                    {type === "frontend" ? project.title : project.project_name}
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