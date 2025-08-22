import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

 function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-purple-700 text-white rounded-full shadow-lg hover:bg-purple-900 transition duration-300 cursor-pointer"
      >
        <ArrowUp size={24} />
      </button>
    )
  );
}
export default ScrollToTop