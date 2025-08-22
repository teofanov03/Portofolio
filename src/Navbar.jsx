
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

 function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="bg-purple-700 p-4 font-bold border-purple-900 sticky top-0 z-50 border-b-4">
      <ul className="list-none flex justify-evenly text-white text-center text-2xl relative">
        <a href="#Home"><li className="change">Home</li></a>
        <a href="#Education"><li className="change">Education</li></a>

        
        <li
          className={`change relative flex items-center gap-1 cursor-pointer group`}
          onClick={() => isMobile && setOpen(!open)}
        >
          <a href="#Projects">Projects</a>
         <ChevronDownIcon
        className={`h-5 w-5 transition-transform duration-300 rotate-90 
         ${open || (!isMobile && "group-hover:-rotate-0")}
        />`} 
          />
          <ul
            className={`absolute left-0 top-full mt-2 bg-purple-800 text-white shadow-lg rounded-lg w-48 text-lg transition-all duration-300
            ${isMobile
              ? open
                ? "opacity-100 visible"
                : "opacity-0 invisible"
              : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}
            `}
          >
            <a href="#aspnet"><li className="p-2 hover:bg-purple-600">ASP.NET</li></a>
            <a href="#csharp"><li className="p-2 hover:bg-purple-600">C#</li></a>
            <a href="#php"><li className="p-2 hover:bg-purple-600">PHP</li></a>
            <a href="#c"><li className="p-2 hover:bg-purple-600">C</li></a>
            <a href="#c++"><li className="p-2 hover:bg-purple-600">C++</li></a>
            <a href="#react"><li className="p-2 hover:bg-purple-600">React</li></a>
            <a href="#python"><li className="p-2 hover:bg-purple-600">Python</li></a>
          </ul>
        </li>

        <a href="#Contact"><li className="change">Contact</li></a>
      </ul>
    </div>
  );
}

export default Navbar;