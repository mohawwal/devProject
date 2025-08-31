import { ArrowDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import HoverableText from "../features/HoverableText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DisplayHead = ({ TextA, TextB, aboutText, id }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const containerRef = useRef();
  const desktopLineRef = useRef();
  const mobileLineRef = useRef();

  useGSAP(() => {
    const container = containerRef.current;
    const desktopLine = desktopLineRef.current;
    const mobileLine = mobileLineRef.current;

    if (!container) return;

    if (desktopLine) {
      gsap.fromTo(
        desktopLine,
        {
          width: "100px",
        },
        {
          width: "400px",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            invalidateOnRefresh: true,
            id: `desktop-line-${id}`,
          },
        }
      );
    }

    if (mobileLine) {
      gsap.fromTo(
        mobileLine,
        {
          width: "60px",
        },
        {
          width: "200px",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            invalidateOnRefresh: true,
            id: `mobile-line-${id}`,
          },
        }
      );
    }
  }, [id]);

  return (
    <div
      id={id}
      ref={containerRef}
      className="w-full md:h-[90vh] h-auto overflow-hidden"
    >
      <div className="">
        <div className="hidden md:flex items-center gap-4 pt-3">
          <h1 className="clamp-text">
            <HoverableText text={TextA} />
          </h1>
          <div
            ref={desktopLineRef}
            className="h-[28px] bg-[#777] rounded w-[100px]"
          />
          <h1 className="clamp-text">
            <HoverableText text={TextB} />
          </h1>
        </div>

        <div className="md:hidden pt-3">
          <h1 className="clamp-text">
            <HoverableText text={TextA} />
          </h1>
          <h1 className="clamp-text mt-5 flex items-center gap-4">
            <div
              ref={mobileLineRef}
              className="h-[20px] bg-[#777] rounded w-[200px]"
            />
            <HoverableText text={TextB} />
          </h1>
        </div>

        <div className="mt-5 flex md:flex-row items-start gap-[5%] flex-col">
          <h1 className="clamp-text">
            <HoverableText text="DEVELOPER" />
          </h1>
          <div className="h-[200px] flex flex-col md:w-full w-[320px] justify-between">
            <p className="clamp-small">{aboutText}</p>
            <div className="clamp-small md:flex flex-row items-center justify-between text-xs text-[#777] hidden">
              <p>Scroll Down</p>
              <div>
                <ArrowDown size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayHead;
