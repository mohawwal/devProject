import { MoveLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios/axiosInstance";

const MobileIndex = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["mobileApp", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/mobile/get-mobileApp/${id}`);
      return response.data;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="text-[#777] flex flex-col gap-4 p-4">
        <div className="flex items-center justify-start">
          <button onClick={() => navigate(-1)}>
            <MoveLeft color="#aaa" />
          </button>
        </div>
        <div className="animate-pulse">
          <div className="h-12 bg-[#333] rounded mb-4"></div>
          <div className="h-4 bg-[#333] rounded mb-2"></div>
          <div className="h-4 bg-[#333] rounded mb-2"></div>
          <div className="h-4 bg-[#333] rounded mb-2"></div>
          <div className="h-4 bg-[#333] rounded mb-8"></div>
          <div className="h-64 bg-[#333] rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-[#777] flex flex-col gap-4 p-4">
        <div className="flex items-center justify-start">
          <button onClick={() => navigate(-1)}>
            <MoveLeft color="#aaa" />
          </button>
        </div>
        <div className="text-center text-red-400">
          <p>Error loading project details</p>
          <p className="text-sm text-[#aaa] mt-2">{error.message}</p>
        </div>
      </div>
    );
  }

  const project = data?.data;

  if (!project) {
    return (
      <div className="text-[#777] flex flex-col gap-4 p-4">
        <div className="flex items-center justify-start">
          <button onClick={() => navigate(-1)}>
            <MoveLeft color="#aaa" />
          </button>
        </div>
        <div className="text-center text-[#aaa]">
          <p>Project not found</p>
        </div>
      </div>
    );
  }

  const sortedMedia =
    project.media?.sort((a, b) => a.display_order - b.display_order) || [];

  return (
    <div>
      <div className="text-[#777] flex flex-col gap-4 p-4">
        <div className="flex items-center justify-start">
          <button onClick={() => navigate(-1)}>
            <MoveLeft color="#aaa" />
          </button>
        </div>

        <div className="flex flex-row items-center justify-between my-3 gap-5">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-white m-0 p-0">
            {project.project_name?.toUpperCase()}
          </h1>
          <p>{new Date(project.created_at).getFullYear()}</p>
        </div>

        <div className="flex flex-col items-start text-[13.8px]">
          <p>INDUSTRY:</p>
          <p className="text-[#aaa]">{project.industry}</p>
        </div>

        <div className="flex flex-col items-start text-[13.8px]">
          <p>STACK:</p>
          <p className="text-[#aaa]">{project.stacks?.join(", ")}</p>
        </div>

        <div className="flex flex-col items-start text-[13.8px]">
          <p>DESIGN:</p>
          <p className="underline text-[#aaa]">
            {project.designer?.toUpperCase()}
          </p>
        </div>

        <div className="flex flex-col items-start text-[13.8px]">
          <p>STATUS:</p>
          <p className="text-[#aaa] capitalize">{project.status}</p>
        </div>

        {(project.project_link || project.github_link) && (
          <div className="flex flex-col items-start text-[13.8px] mb-8 gap-1">
            <p>LINKS:</p>
            <div className="flex flex-col">
              {/* {project.project_link && (
                <a 
                  href={project.project_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#aaa] underline hover:text-[#E34234] transition-colors"
                >
                  Project Link
                </a>
              )} */}
              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#aaa] underline hover:text-[#E34234] transition-colors"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        )}

        {/* Media Section */}
        {sortedMedia.length > 0 && (
          <div className="flex flex-col items-start text-[13.8px] gap-8 -mx-4 px-0">
            {sortedMedia.map((media) => (
              <div key={media.id} className="w-full">
                {media.file_type?.startsWith("video/") ? (
                  <video
                    src={media.file_url}
                    controls
                    preload="metadata"
                    className="w-full aspect-video object-cover block"
                    poster={media.thumbnail_url || undefined}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={media.file_url}
                    alt={media.description || `Media ${media.display_order}`}
                    className="w-full mt-6 rounded-lg object-cover block"
                  />
                )}
                {media.description && (
                  <p className="text-[#aaa] pt-3 text-[13.8px] uppercase px-4">
                    {media.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {sortedMedia.length === 0 && (
          <div className="text-center text-[#aaa] py-8">
            <p>No media available for this project</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileIndex;
