import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios/axiosInstance"

const ApiSkeleton = () => {
  return (
    <div className="min-h-screen my-10 text-[#aaa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="h-4 bg-[#333] rounded animate-shimmer w-48"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left side - Projects skeleton */}
          <div className="w-full lg:w-2/3">
            <div className="border-t-[0.5px] border-[#aaa]">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="border-b-[0.5px] border-[#aaa] py-3">
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

          {/* Right side - Sidebar skeleton */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-4 space-y-6">
              {/* Music section skeleton */}
              <div className="bg-[#111] rounded-lg p-4">
                <div className="h-4 bg-[#333] rounded animate-shimmer w-32 mb-3"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-[#333] rounded animate-shimmer w-full"></div>
                  <div className="h-3 bg-[#333] rounded animate-shimmer w-4/5"></div>
                  <div className="h-3 bg-[#333] rounded animate-shimmer w-3/4"></div>
                </div>
                <div className="h-3 bg-[#333] rounded animate-shimmer w-20 mt-3"></div>
              </div>

              {/* Arsenal section skeleton */}
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

const Api = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMusicDetails, setShowMusicDetails] = useState(false);
  const [showArsenalDetails, setShowArsenalDetails] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const {
    isLoading: BeIsLoading,
    error: BeError,
    data: BeData,
  } = useQuery({
    queryKey: ["backend-data"],
    queryFn: async () => {
      const response = await axiosInstance.get("/backend/get-data");
      return response.data;
    },
  });

  const BackendProjects = BeData?.projects || [];

  if (BeIsLoading) {
    return <ApiSkeleton />;
  }

  if (BeError) {
    return (
      <div className="min-h-screen my-10 text-[#aaa] flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-red-400">Error loading backend projects</p>
          <p className="text-xs text-[#666] mt-2">{BeError.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen my-10 text-[#aaa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <p className="text-xs">
            BACKEND X <br /> INTEGRATION ({BackendProjects.length})
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="w-full lg:w-2/3">
            <div className="border-t-[0.5px] border-[#aaa]">
              {BackendProjects.map((project, index) => (
                <div key={project.id} className="border-b-[0.5px] border-[#aaa]">
                  <div
                    className="flex items-center justify-between py-3 cursor-pointer hover:text-[#777] transition-colors"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{project.project_name}</p>
                      <p className="text-xs text-[#666] mt-1">
                        {project.stack.join(' • ')} {project.company && `| ${project.company}`}
                      </p>
                    </div>
                    <button
                      className={`transform transition-transform duration-200 flex-shrink-0 ml-2 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={18} />
                    </button>
                  </div>
                  {openIndex === index && (
                    <div className="pb-4 text-sm animate-in slide-in-from-top-1 duration-200">
                      <div className="mb-4 text-[#888] leading-relaxed">
                        {project.description}
                      </div>

                      {project.image && (
                        <div className="mb-4">
                          <img
                            src={project.image}
                            alt={project.project_name}
                            className="w-full max-w-md h-48 object-cover rounded-lg border border-[#333] hover:border-[#555] transition-colors"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}

                      {project.code && (
                        <div className="mb-4">
                          <h4 className="text-[#bbb] font-semibold mb-2">
                            Code Example:
                          </h4>
                          <pre className="bg-[#1a1a1a] border border-[#333] rounded-md p-3 overflow-x-auto text-xs">
                            <code className="text-[#90ee90]">{project.code}</code>
                          </pre>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs">
                        {project.github_link && (
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <span className="text-[#888]">GitHub:</span>
                            <a
                              href={project.github_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#4a9eff] hover:text-[#6bb6ff] underline transition-colors break-all"
                            >
                              {project.github_link}
                            </a>
                          </div>
                        )}
                        
                        {project.project_link && (
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <span className="text-[#888]">Live:</span>
                            <a
                              href={project.project_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#4a9eff] hover:text-[#6bb6ff] underline transition-colors break-all"
                            >
                              {project.project_link}
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="mt-3 pt-3 border-t border-[#333]">
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="text-[#666]">Uploaded:</span>
                          <span className="text-[#888]">
                            {new Date(project.created_at).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="sticky top-4 space-y-6">
              <div className="rounded-lg p-4">
                <h2 className="text-[#bbb] font-semibold mb-3 text-sm uppercase tracking-wide">
                  MUSIC & VIBES
                </h2>
                <div className="text-[13.5px] text-[#888] leading-relaxed space-y-2">
                  <p>
                    Won't like to be identified as an FC, but regardless, I fuck with Wizkid so bad. 
                    "Made in Lagos" is the ultimate coding soundtrack - pure vibes that keep the flow going.
                  </p>
                  {showMusicDetails && (
                    <div className="animate-in slide-in-from-top-1 duration-200 space-y-2">
                      <p>
                        I'm drawn to songs with explicit content and raw energy like Shalipopi's "Lahu",
                        something about that unfiltered expression just hits different when you're deep in code.
                      </p>
                      <p>
                        My playlist is a chaotic mix of Afrobeats, drill, and whatever gets the dopamine flowing. 
                        Burna Boy's "c&d" on repeat during debugging sessions, and some UK drill when the imposter syndrome kicks in.
                      </p>
                      <p>
                        Music isn't just background noise, it's fuel. The right track can turn a frustrating 
                        bug hunt into a flow state, or transform a mundane CRUD operation into art.
                      </p>
                    </div>
                  )}
                  <button
                    onClick={() => setShowMusicDetails(!showMusicDetails)}
                    className="text-[#4a9eff] hover:text-[#6bb6ff] text-xs underline transition-colors mt-2"
                  >
                    {showMusicDetails ? 'Show Less' : 'View More'}
                  </button>
                </div>
                
                {showMusicDetails && (
                  <div className="mt-4 pt-3 border-t border-[#333]">
                    <p className="text-[#888] text-xs mb-2">Current Coding Playlist:</p>
                    <a
                      href="https://open.spotify.com/playlist/7ztA5ENUAYw6ybvY3DZZAV?si=f1e8726020694648"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1db954] hover:bg-[#1ed760] text-black text-xs px-3 py-2 rounded-full transition-colors font-medium"
                    >
                      <span>🎵</span>
                      Listen on Spotify
                    </a>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h2 className="text-[#bbb] font-semibold mb-3 text-sm uppercase tracking-wide">
                  ARSENAL FC
                </h2>
                <div className="text-[13px] text-[#888] leading-relaxed space-y-2">
                  <p>
                    As an Arsenal fan, I've mastered the art of debugging under pressure - 
                    because supporting Arsenal is basically error handling in real life.
                  </p>
                  {showArsenalDetails && (
                    <div className="animate-in slide-in-from-top-1 duration-200 space-y-2">
                      <p>
                        Every season starts with hope (like starting a new project), hits unexpected bugs 
                        (injuries to key players), faces deployment issues (VAR decisions), and somehow 
                        we still believe next time will be different.
                      </p>
                      <p>
                        The parallels are uncanny: Arteta's tactical approach is like clean code architecture - 
                        methodical, patient, building from the foundation up. Sometimes it's beautiful, 
                        sometimes it's frustrating, but the process matters.
                      </p>
                      <p>
                        Being a Gooner has taught me resilience in coding. When your build fails for the 
                        10th time, just remember we've been waiting for a Premier League title since 2004. 
                        Perspective, my friend.
                      </p>
                      <p className="text-[#ff6b6b]">
                        COYG! 🔴⚪️
                      </p>
                    </div>
                  )}
                  <button
                    onClick={() => setShowArsenalDetails(!showArsenalDetails)}
                    className="text-[#4a9eff] hover:text-[#6bb6ff] text-xs underline transition-colors mt-2"
                  >
                    {showArsenalDetails ? 'Show Less' : 'View More'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;