import { useState } from "react";

const Card = () => {
  const [showMore, setShowMore] = useState(false);

  const storyParagraphs = [
    <>
      Experienced software engineer with a strong focus on{" "}
      <span className="text-[#aaa]">backend systems and fintech solutions</span>. 
      Skilled in designing scalable, high-performance applications using modern technologies.
    </>,
    <>
      Transitioned into software development through <span className="text-[#aaa]">self-directed learning</span>, mastering Go, Node.js, React, and cloud-native architectures to build reliable, production-ready applications.
    </>,
    <>
      Delivered multiple <span className="text-[#aaa]">fintech projects</span>, from digital payments to wallet integrations, handling complex business logic, API design, and real-time transaction processing.
    </>,
    <>
      Built robust <span className="text-[#aaa]">full-stack solutions</span> including web dashboards, admin tools, and analytics platforms, integrating AI-driven insights and modern security best practices.
    </>,
    <>
      Designed and implemented <span className="text-[#aaa]">this portfolio</span> as a full-stack system, with an admin dashboard to manage projects, track traffic, and analyze visitor behavior by geography.
    </>,
    <>
      <span className="text-[#aaa]">Open to new challenges</span>, focused on shipping high-quality systems, exploring cutting-edge technologies, and solving complex problems in fintech and beyond.
    </>,
  ];

  const visibleParagraphs = showMore
    ? storyParagraphs
    : storyParagraphs.slice(0, 2);

  return (
    <div className="mt-[5%] pb-[20%] relative overflow-hidden">
      <div className="border-[#aaa] border-b-[1px] flex gap-4 flex-col justify-center items-center px-4 relative z-10">
        <p className="text-xs text-[#aaa] uppercase tracking-wide font-bold">
          PROFESSIONAL SUMMARY
        </p>

        <div className="max-w-3xl pt-3 pb-6 text-start font-normal text-[#777] text-sm leading-relaxed space-y-3">
          {visibleParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <button
            onClick={() => setShowMore(!showMore)}
            className="text-[#aaa] text-end w-full underline text-xs mt-1 hover:text-[#9f9f9f]"
          >
            {showMore ? "Show less" : "View full journey"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
