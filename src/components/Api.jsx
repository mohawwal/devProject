import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios/axiosInstance"
import { ApiSkeleton } from "../features/ProjectSkeleton";

const Api = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMusicDetails, setShowMusicDetails] = useState(false);
  const [showArsenalDetails, setShowArsenalDetails] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const {
    isLoading: BeIsLoading,
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

  return (
    <div className="min-h-screen text-[#aaa]">
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
                        Burna Boy's "cloak & Dagger" on repeat during debugging sessions, and some UK drill when the imposter syndrome kicks in.
                      </p>
                      <p>
                        Music isn't just background noise, it's fuel. The right track can turn a frustrating 
                        bug hunt into a flow state, or transform a mundane CRUD operation into art.
                      </p>
                    </div>
                  )}
                  <button
                    onClick={() => setShowMusicDetails(!showMusicDetails)}
                    className="hover:text-[#4a9eff] text-xs underline transition-colors mt-2"
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
                        Being a Gooner has taught me resilience in life & coding. When your build fails for the 
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
                    className="hover:text-[#4a9eff] text-xs underline transition-colors mt-2"
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