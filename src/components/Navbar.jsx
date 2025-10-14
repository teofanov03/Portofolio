import { useState, useEffect } from "react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="bg-purple-700 p-4 font-bold border-purple-900 sticky top-0 z-50 border-b-4">
      
      <div className="flex justify-between items-center md:hidden">
        <h1 className="text-white text-2xl">My Portfolio</h1>
        <button onClick={() => setOpen(!open)}>
          {open ? (
            <XMarkIcon className="h-8 w-8 text-white" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-white" />
          )}
        </button>
      </div>

     
      <ul
        className={`list-none md:flex justify-evenly text-white text-center text-2xl transition-all duration-300
          ${isMobile ? (open ? "block" : "hidden") : "flex"}
        `}
      >
        <a href="#Home"><li className="change">Home</li></a>
        <a href="#Education"><li className="change">Education</li></a>

        <li
          className="change p-2 relative flex flex-col md:flex-row items-center gap-1 cursor-pointer group"
          onClick={() => isMobile && setOpenProjects(!openProjects)}
        >
          <div className="flex items-center gap-1">
            <a href="#Projects">Projects</a>
            <ChevronDownIcon
              className={`h-5 w-5 transition-transform duration-300 rotate-90 ${
                openProjects ? "rotate-0" : ""
              } ${!isMobile ? "group-hover:rotate-0" : ""}`}
            />
          </div>

          <ul
            className={`bg-purple-800 text-white shadow-lg rounded-lg w-48 text-lg transition-all duration-300 absolute md:top-full md:left-0 mt-2
              ${isMobile
                ? openProjects
                  ? "opacity-100 visible relative mt-2"
                  : "opacity-0 invisible h-0"
                : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}
            `}
          >
            <a href="#aspnet"><li className="p-2 hover:bg-purple-600">ASP.NET</li></a>
            <a href="#php"><li className="p-2 hover:bg-purple-600">PHP</li></a>
            <a href="#javascript"><li className="p-2 hover:bg-purple-600">Javascript</li></a>
            <a href="#react"><li className="p-2 hover:bg-purple-600">React</li></a>
          </ul>
        </li>

        <a href="#Contact"><li className="change">Contact</li></a>
      </ul>
    </div>
  );
}

export default Navbar;
