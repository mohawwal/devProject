import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleSectionClick = useCallback(
    (sectionId) => {
      const isHomePage = location.pathname === "/";

      if (!isHomePage) {
        navigate("/", { replace: false });

        requestAnimationFrame(() => {
          setTimeout(() => {
            scrollToSection(sectionId);
          }, 50);
        });
      } else {
        scrollToSection(sectionId);
      }
    },
    [location.pathname, navigate, scrollToSection]
  );

  return (
    <div className="flex mb-2 flex-row justify-between items-start md:items-center text-xs text-[#aaa]">
      <div className="flex flex-row justify-between items-center">
        <p>
          ANILELEYE <br /> AWWAL
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-[82%] items-end md:items-center gap-3 md:gap-[15%] md:justify-start">
        <p className="opacity-65">
          <a
            className="hover:underline hover:underline-offset-2 hover:text-white transition-colors duration-200"
            href="https://drive.google.com/file/d/1K7XvwjN0n83JtOhh-KsvYIcUa0kG03cS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            SOFTWARE RESUME
          </a>
          <br />
          <a
            href="https://awwal-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:underline hover:underline-offset-2 hover:text-white transition-colors duration-200"
          >
            FRONTEND
          </a>{" "}
          /{" "}
          <span
            className="cursor-pointer hover:underline hover:underline-offset-2 hover:text-white transition-colors duration-200"
            onClick={() => handleSectionClick("backend")}
          >
            BACKEND
          </span>{" "}
          /{" "}
          <span
            className="cursor-pointer hover:underline hover:underline-offset-2 hover:text-white transition-colors duration-200"
            onClick={() => handleSectionClick("mobile")}
          >
            MOBILE-APP
          </span>
        </p>
        <button
          onClick={() => handleSectionClick("contact")}
          className="cursor-pointer border py-1 px-3 text-sm border-[#aaa] rounded-full flex items-center justify-center md:ml-auto"
        >
          <p>CONTACT</p>
        </button>
      </div>
    </div>
  );
};

export default Nav;
