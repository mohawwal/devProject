import React from "react";

export const ListSkeleton = ({ count = 2 }) => {
  return (
    <div className="text-[#777]">
      {Array.from({ length: count }).map((_, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className="group h-[280px] border-y-[0.5px] border-[#aaa] flex flex-col justify-between"
          >
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

            <div className={`font-bebas ${isEven ? "text-left" : "text-right"} w-full px-8`}>
              <div className="space-y-2">
                <div
                  className={`h-12 bg-[#333] rounded animate-shimmer ${
                    isEven ? "w-3/4" : "w-2/3 ml-auto"
                  }`}
                ></div>
                <div
                  className={`h-8 bg-[#333] rounded animate-shimmer ${
                    isEven ? "w-1/2" : "w-1/3 ml-auto"
                  }`}
                ></div>
              </div>
            </div>

            <div className="h-[20%]"></div>
          </div>
        );
      })}
    </div>
  );
};

export const ApiSkeleton = () => {
  return (
    <div className="min-h-screen my-10 text-[#aaa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="h-4 bg-[#333] rounded animate-shimmer w-48"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="w-full lg:w-2/3">
            <div className="border-t-[0.5px] border-[#aaa]">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="border-b-[0.5px] border-[#aaa] py-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-[#333] rounded animate-shimmer w-2/3"></div>
                      <div className="h-3 bg-[#333] rounded animate-shimmer w-1/2"></div>
                    </div>
                    <div className="h-5 w-5 bg-[#333] rounded animate-shimmer ml-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="sticky top-4 space-y-6">
              <div className="bg-[#111] rounded-lg p-4">
                <div className="h-4 bg-[#333] rounded animate-shimmer w-32 mb-3"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-[#333] rounded animate-shimmer w-full"></div>
                  <div className="h-3 bg-[#333] rounded animate-shimmer w-4/5"></div>
                  <div className="h-3 bg-[#333] rounded animate-shimmer w-3/4"></div>
                </div>
                <div className="h-3 bg-[#333] rounded animate-shimmer w-20 mt-3"></div>
              </div>

              <div className="p-4">
                <div className="h-4 bg-[#333] rounded animate-shimmer w-24 mb-3"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-[#333] rounded animate-shimmer w-full"></div>
                  <div className="h-3 bg-[#333] rounded animate-shimmer w-5/6"></div>
                </div>
                <div className="h-3 bg-[#333] rounded animate-shimmer w-20 mt-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
