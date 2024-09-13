import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="z-50 ">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed w-12 h-12 p-3 text-white bg-indigo-600 rounded-full shadow-lg bottom-5 right-5 hover:bg-indigo-500"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
