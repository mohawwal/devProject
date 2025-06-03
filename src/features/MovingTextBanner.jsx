
const MovingTextBanner = ({text}) => {
  return (
    <div className="my-7 border-y-[0.5px] border-[#aaa] overflow-hidden">
      <div className="relative">
        <h1 className="clamp-move py-4 text-[#E34234] hover:text-[#aaa] whitespace-nowrap animate-scroll">
          {text}
        </h1>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MovingTextBanner;