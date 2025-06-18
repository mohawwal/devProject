import React, { useState, useEffect } from "react";
import { Code, Cpu, Database, Globe, Rocket, Zap, Terminal, Settings, Monitor, Smartphone } from "lucide-react";

const Card = () => {
  const [icons, setIcons] = useState([]);
  
  const iconComponents = [Code, Cpu, Database, Globe, Rocket, Zap, Terminal, Settings, Monitor, Smartphone];
  
  useEffect(() => {
    const generateIcons = () => {
      const newIcons = [];
      for (let i = 0; i < 8; i++) {
        const IconComponent = iconComponents[Math.floor(Math.random() * iconComponents.length)];
        newIcons.push({
          id: i,
          Icon: IconComponent,
          x: -10, // Start from left edge (off-screen)
          y: Math.random() * 60, // Only use top 60% of container
          size: Math.random() * 15 + 25,
          rotation: Math.random() * 360,
          speed: Math.random() * 0.3 + 0.2
        });
      }
      setIcons(newIcons);
    };
    
    generateIcons();
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIcons(prevIcons => 
        prevIcons.map(icon => ({
          ...icon,
          x: icon.x > 110 ? -10 : icon.x + icon.speed, // Reset to left when off-screen
          rotation: (icon.rotation + 0.5) % 360
        }))
      );
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-[5%] pb-[20%] relative overflow-hidden">
      {/* Animated Background Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {icons.map((icon) => {
          const { Icon, x, y, size, rotation, id } = icon;
          return (
            <Icon
              key={id}
              className="absolute text-gray-200 opacity-10"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                transform: `rotate(${rotation}deg)`,
                transition: 'all 0.1s linear'
              }}
            />
          );
        })}
      </div>
      
      <div className="border-[#aaa] border-b-[1px] flex gap-4 flex-col justify-center items-center px-4 relative z-10">
        <p className="text-xs text-[#aaa] uppercase tracking-wide font-bold">
  ORIGIN STORY
</p>
<div className="max-w-3xl pt-3 pb-6 text-start font-normal text-[#777] text-sm leading-relaxed space-y-3">
  <p>
    In my final semester studying <span className="text-[#aaa]">Agricultural and Biosystems Engineering</span>, 
    I started questioning what life after school would look like. While juggling exams and research, I explored 
    other interests, from art to YouTube and content creation.
  </p>
  <p>
    One day, I clicked on a <span className="text-[#aaa]">JavaScript tutorial</span> by accident while watching 
    a video on making better YouTube content. That curiosity turned into passion. I taught myself HTML, CSS, 
    and JavaScript, and once I found React, I was all in.
  </p>
  <p>
    I began a <span className="text-[#aaa]">100 Days of Code</span> challenge on Twitter. Right before exams, 
    someone asked me to build an NFT website. I took it on, built it with React, and delivered my best.
  </p>
  <p>
    That semester, I graduated with a <span className="text-[#aaa]">5.0 CGPA, a distinction in my final project</span>, 
    and my first real gig. That’s when I knew this is what I want to do.
  </p>
  <p>
    I've since worked on fintech and e-commerce projects as a full-stack engineer, using 
    <span className="text-[#aaa]"> React, Vue, React Native, Node.js, Tailwind, and even AI</span>.
  </p>
  <p>
    <span className="text-[#aaa]">This portfolio?</span> I built it fullstack with an admin dashboard to upload projects and track 
    visits by country.
  </p>
  <p>
    <span className="text-[#aaa]">I'm open to new opportunities</span> and always learning one line of code at a time.
  </p>
</div>

      </div>
    </div>
  );
};

export default Card;