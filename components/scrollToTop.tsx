import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Button
      id="scroll-top-button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 rounded-full z-100 cursor-pointer"
      size="icon"
      style={{
        pointerEvents: isVisible ? "auto" : "none",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <ArrowUpIcon aria-label="Arrow Up Icon" />
    </Button>
  );
};

export default ScrollToTop;
