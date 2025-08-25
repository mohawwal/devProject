import { useState } from "react";

const Card = () => {
  const [showMore, setShowMore] = useState(false);

  const storyParagraphs = [
    <>
      In my final semester studying{" "}
      <span className="text-[#aaa]">
        Agricultural and Biosystems Engineering
      </span>
      , I started questioning what life after school would look like. While
      juggling exams and research, I explored other interests, from art to
      YouTube and content creation.
    </>,
    <>
      One day, I accidentally clicked on a{" "}
      <span className="text-[#aaa]">JavaScript tutorial</span> video on YouTube
      while searching for how to "make better YT content". I got curious & kept
      watching & that curiosity quickly turned into passion. I taught myself
      HTML, CSS, & JavaScript, and once I found React, I was all in.
    </>,
    <>
      I began a <span className="text-[#aaa]">100 Days of Code</span> challenge
      on Twitter. Right before exams, someone asked me to build an NFT website.
      I took it on, built it with React, and delivered my best.
    </>,
    <>
      That semester, I graduated with a{" "}
      <span className="text-[#aaa]">
        5.0 CGPA, a distinction in my final project
      </span>
      , and my first real gig. That’s when I knew this is what I want to do.
    </>,
    <>
      I've since worked on fintech and e-commerce projects as a full-stack
      engineer, using
      <span className="text-[#aaa]">
        {" "}
        React, Vue, React Native, Node.js, Tailwind, integrating AI to API{" "}
      </span>
      ...
    </>,
    <>
      <span className="text-[#aaa]">This portfolio?</span> I built it fullstack
      with an admin dashboard to upload projects and track visits by country.
    </>,
    <>
      <span className="text-[#aaa]">I'm open to new opportunities</span> and
      always learning one line of code at a time.
    </>,
  ];

  const visibleParagraphs = showMore
    ? storyParagraphs
    : storyParagraphs.slice(0, 2);

  return (
    <div className="mt-[5%] pb-[20%] relative overflow-hidden">
      <div className="border-[#aaa] border-b-[1px] flex gap-4 flex-col justify-center items-center px-4 relative z-10">
        <p className="text-xs text-[#aaa] uppercase tracking-wide font-bold">
          ORIGIN STORY
        </p>

        <div className="max-w-3xl pt-3 pb-6 text-start font-normal text-[#777] text-sm leading-relaxed space-y-3">
          {visibleParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <button
            onClick={() => setShowMore(!showMore)}
            className="text-[#aaa] text-end w-full underline text-xs mt-1 hover:text-[#9f9f9f]"
          >
            {showMore ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
