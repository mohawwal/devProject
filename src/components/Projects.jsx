import { Link } from "react-router-dom";
import {ListSkeleton} from "../features/ProjectSkeleton";
import { ArrowUpRight } from "lucide-react";

const Projects = ({
  projects = [],
  BeIsLoading = false,
  FeIsLoading = false,
  type,
}) => {
  if (BeIsLoading || FeIsLoading) {
    return <ListSkeleton count={2} />;
  }

  return (
    <div className="text-[#777]">
      {projects.map((project, index) => (
        <div
          key={project.id || `project-${index}`}
          className="group border-y-[0.5px] border-[#aaa] flex flex-col justify-between"
        >
          <div className="h-[30%] pt-3 text-[12.5px] font-sauce opacity-85 w-full flex items-center justify-around">
            {index === 0 ? (
              <>
                <span>
                  FEATURED / <br /> PROJECTS ({projects.length})
                </span>
              </>
            ) : (
              <>{(project.status || project.company)?.toUpperCase()}</>
            )}
            <div>
              <span>
                {(project.industry || project.category)?.toUpperCase()}
                <br />
                <span className="block md:hidden">
                  {project.stacks?.[0]}
                  {project.stacks?.length > 1 && " •••"}
                </span>
                <span className="hidden md:inline">
                  {project.stacks?.map((stack, i) => (
                    <span key={i}>{i === 0 ? stack : ` • ${stack}`}</span>
                  ))}
                </span>
              </span>
            </div>
          </div>

          <div className={`font-bebas w-full px-8 cursor-default ${index % 2 === 0 ? 'text-start' : 'text-end'}`}>
            {type === "frontend" ? (
              <>
                <a
                  target="_blank"
                  href={project.project_link}
                  className="relative clamp-span inline-flex items-center gap-1 group py-5 w-fit transition-all duration-300 ease-in-out hover:text-[#E34234] hover:scale-105"
                >
                  {project.project_name}
                  <ArrowUpRight className="w-4 h-4 text-[#E34234] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </>
            ) : (
              <>
                <Link
                  to={`/mobile/${project.id}`}
                  className="relative clamp-span inline-flex items-center gap-1 group py-5 w-fit transition-all duration-300 ease-in-out hover:text-[#E34234] hover:scale-105"
                >
                  {project.project_name}
                  <ArrowUpRight className="w-4 h-4 text-[#E34234] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
              </>
            )}
          </div>
          {project.github_link && (
            <span className="w-full text-right text-[14px] font-sauce pr-3 opacity-70">
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer opacity-0 group-hover:opacity-100 flex items-center gap-1 justify-end"
              >
                <p>GitHub</p>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </span>
          )}
          <div className="h-[20%]"></div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
