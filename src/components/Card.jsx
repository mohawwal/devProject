import { useState } from "react";

const Card = () => {
  const [showMore, setShowMore] = useState(false);

  const storyParagraphs = [
    <>
      Final-year graduate of{" "}
      <span className="text-[#aaa]">
        Engineering
      </span>
      , with a strong academic background and growing interest in technology and
      problem-solving beyond the classroom.
    </>,
    <>
      Transitioned into software development through{" "}
      <span className="text-[#aaa]">self-directed learning</span>, starting with
      HTML, CSS, and JavaScript, and later specializing in React and modern
      frontend development.
    </>,
    <>
      Completed a{" "}
      <span className="text-[#aaa]">100 Days of Code</span> challenge, building
      real-world projects and delivering a production-ready NFT website during
      my final semester.
    </>,
    <>
      Graduated with a{" "}
      <span className="text-[#aaa]">
        5.0 CGPA and distinction in my final project
      </span>
      , while securing my first professional software development role.
    </>,
    <>
      Worked as a{" "}
      <span className="text-[#aaa]">Full-Stack Engineer</span> on fintech and
      e-commerce products, building scalable interfaces and APIs using
      <span className="text-[#aaa]">
        {" "}
        React, Vue, React Native, Node.js, Tailwind, and AI-powered integrations
      </span>
      .
    </>,
    <>
      Designed and built{" "}
      <span className="text-[#aaa]">this portfolio</span> as a full-stack
      application, including an admin dashboard for project management and
      visitor analytics by country.
    </>,
    <>
      <span className="text-[#aaa]">Currently open to new opportunities</span>,
      focused on shipping high-quality products, learning continuously, and
      solving real-world problems with code.
    </>,
  ];

  const visibleParagraphs = showMore
    ? storyParagraphs
    : storyParagraphs.slice(0, 2);

  return (
    <div className="mt-[5%] pb-[20%] relative overflow-hidden">
      <div className="border-[#aaa] border-b-[1px] flex gap-4 flex-col justify-center items-center px-4 relative z-10">
        <p className="text-[13px] text-[#aaa] uppercase tracking-wide font-bold">
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
