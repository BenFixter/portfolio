import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover"; // Import ShadCN's Popover components
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

interface SocialsProps {
  data: Socials;
}

const Socials: React.FC<SocialsProps> = ({ data }) => {
  return (
    <div className="flex lg:flex-nowrap flex-wrap items-center gap-8">
      <div className="w-full lg:w-auto flex justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full" effect="shineHover">
              Resume
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-[90vw] max-w-[800px] h-[70vh] p-0 overflow-hidden bg-background shadow-xl animate-in fade-in zoom-in-95 border-t-2 border-secondary rounded-xl hover:border-primary/25"
            style={{ borderRadius: "12px" }}
          >
            <div className="flex items-center justify-between px-4 py-2 bg-secondary/20">
              <span className="font-medium text-gray-400">Resume</span>

              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary border-none"
              >
                Open in new tab ↗
              </a>
            </div>

            <iframe
              src="/CV.pdf"
              className="w-full h-full border-none"
              title="CV PDF"
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-row grow justify-around lg:justify-normal lg:gap-8">
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row content-center justify-center"
        >
          <FaGithub
            aria-label="Github Icon"
            size={20}
            className="rotate-0 scale-100 transition-all cursor-pointer hover:text-gray-400 "
          />
        </a>
        <a
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row content-center justify-center"
        >
          <FaLinkedin
            aria-label="Linkedin Icon"
            size={20}
            className="rotate-0 scale-100 transition-all cursor-pointer hover:text-gray-400 "
          />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Socials;
