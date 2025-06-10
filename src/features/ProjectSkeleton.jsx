import React from "react";

const ProjectSkeleton = ({ count = 3 }) => {
  return (
    <div className="text-[#777]">
      {Array.from({ length: count }).map((_, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <div
            key={index}
            className="group h-[280px] border-y-[0.5px] border-[#aaa] flex flex-col justify-between"
          >
            {/* Top section - Role/Tech info */}
            <div className="h-[30%] text-[12.5px] font-sauce opacity-85 w-full flex items-center justify-around">
              {index === 0 ? (
                <>
                  <div className="space-y-1">
                    <div className="h-2 bg-[#333] rounded animate-shimmer w-20"></div>
                    <div className="h-2 bg-[#333] rounded animate-shimmer w-16"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-[#333] rounded animate-shimmer w-24"></div>
                    <div className="h-2 bg-[#333] rounded animate-shimmer w-32"></div>
                  </div>
                </>
              ) : (
                <>
                  <div className="h-2 bg-[#333] rounded animate-shimmer w-20"></div>
                  <div className="h-2 bg-[#333] rounded animate-shimmer w-28"></div>
                </>
              )}
            </div>

            {/* Middle section - Project name */}
            <div className={`font-bebas ${isEven ? "text-left" : "text-right"} w-full px-8`}>
              <div className="space-y-2">
                <div className={`h-12 bg-[#333] rounded animate-shimmer ${isEven ? "w-3/4" : "w-2/3 ml-auto"}`}></div>
                <div className={`h-8 bg-[#333] rounded animate-shimmer ${isEven ? "w-1/2" : "w-1/3 ml-auto"}`}></div>
              </div>
            </div>

            {/* Bottom spacer */}
            <div className="h-[20%]"></div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectSkeleton;