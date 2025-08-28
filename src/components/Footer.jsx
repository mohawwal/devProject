import React, { useState, useEffect } from "react";
import MovingTextBanner from "../features/MovingTextBanner";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const email = "aanileleye@gmail.com";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Africa/Lagos",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contact">
      <div className="flex items-center justify-center my-5">
        <p className="text-xs text-[#777] text-center my-4 w-[290px]">
          Got a question, proposal or project or want to work together on
          something? Feel free to reach out.
        </p>
      </div>

      <MovingTextBanner text={"SAY SOMETHING - LETS TALK - LET'S COLLABORATE - WANT A SOFTWARE DEVELOPER FOR YOUR FRONTEND? - BACKEND? - MOBILE APP PROJECT? - SAY HELLO -"}/>

      <div className="text-center my-6">
        <div 
          className="inline-flex items-center gap-2 text-base text-[#777] hover:text-[#aaa] cursor-pointer transition-colors duration-200"
          onClick={handleCopy}
        >
          <span>{email}</span>
          <div className="text-[10px] text-gray-50 border-[#aaa] rounded-full border px-2 bg-transparent hover:bg-gray-400 hover:text-gray-50 transition-colors duration-200 whitespace-nowrap">
            {copied ? "Copied!" : "Copy"}
          </div>
        </div>
      </div>

      <div className="py-8 md:justify-between md:flex md:flex-row text-center text-xs text-[#777]">
        <p>LAGOS NG {currentTime}</p>
        <div className="flex justify-center gap-3 mt-4 md:mt-0">
          <li className="list-none border-[#aaa] rounded-full border py-1 px-2 hover:border-[#777] hover:text-[#aaa] cursor-pointer transition-colors duration-200">
            <a href="https://x.com/_mohawwal" target="_blank" rel="noopener noreferrer">TWITTER</a>
          </li>
          <li className="list-none border-[#aaa] rounded-full border py-1 px-2 hover:border-[#777] hover:text-[#aaa] cursor-pointer transition-colors duration-200">
            <a href="https://www.instagram.com/_hayjhay" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          </li>
          <li className="list-none border-[#aaa] rounded-full border py-1 px-2 hover:border-[#777] hover:text-[#aaa] cursor-pointer transition-colors duration-200">
            <a href="https://www.linkedin.com/in/anileleye-awwal-878556145/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          </li>
          <li className="list-none border-[#aaa] rounded-full border py-1 px-2 hover:border-[#777] hover:text-[#aaa] cursor-pointer transition-colors duration-200">
            <a href="https://github.com/mohawwal" target="_blank" rel="noopener noreferrer">GITHUB</a>
          </li>
        </div>
        <div className="mt-4 md:mt-0">
          Design <span className="opacity-50">Inspired by Seyi.dev</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;