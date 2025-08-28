import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: {
          y: el,
          offsetY: 50,
        },
        ease: "sine.inOut",
      });
    }
  }, []);

  const handleSectionClick = useCallback(
    (sectionId) => {
      isHomePage
      if (!isHomePage) {
        navigate("/", { replace: false });

        setTimeout(() => {
          scrollToSection(sectionId);
        }, 500); 
      } else {
        scrollToSection(sectionId);
      }
    },
    [isHomePage, navigate, scrollToSection]
  );

    const handleContact = useCallback(() => {
    isHomePage
    if (!isHomePage) {
      navigate("/", { replace: false });

      setTimeout(() => {
        scrollToSection("contact")
      }, 500)
    } else {
      scrollToSection("contact")
    }
  }, [isHomePage, navigate, scrollToSection])

  const stack = [
    { name: "FRONTEND", id: "frontend" },
    { name: "BACKEND", id: "backend" },
    { name: "MOBILE-APP", id: "mobile" },
  ];

  return (
    <div className="flex mb-2 flex-row justify-between items-start md:items-center text-xs text-[#aaa]">
      <div className="flex flex-row justify-between items-center">
        <p>
          ANILELEYE <br /> AWWAL
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-[82%] items-end md:items-center gap-3 md:gap-[15%] md:justify-start">
        <div className="opacity-65">
          <a
            className="hover:underline hover:underline-offset-2 hover:text-white transition-colors duration-200"
            href="https://drive.google.com/file/d/1K7XvwjN0n83JtOhh-KsvYIcUa0kG03cS/view?usp=sharing "
            target="_blank"
            rel="noopener noreferrer"
          >
            SOFTWARE RESUME
          </a>
          <br />
          <div className="flex flex-row gap-2">
            {stack.map((item, index) => (
              <div key={index}>
                <div
                  className="hover:underline hover:underline-offset-2 hover:text-white transition-colors duration-200 cursor-pointer"
                  onClick={() => handleSectionClick(item.id)}
                >
                  {item.name}
                  {index < stack.length - 1 && " / "}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleContact} className="cursor-pointer border py-1 px-3 text-sm border-[#aaa] rounded-full flex items-center justify-center md:ml-auto">
          <p>CONTACT</p>
        </button>
      </div>
    </div>
  );
};

export default Nav;