import { useEffect, useRef } from "react";

interface MouseSpotlightProps {
  radius: number;
}

const MouseSpotlight: React.FC<MouseSpotlightProps> = ({ radius }) => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const mousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.pageX, y: e.pageY };
      if (backgroundRef.current) {
        backgroundRef.current.style.background = `radial-gradient(circle ${radius}px at ${mousePositionRef.current.x}px ${mousePositionRef.current.y}px, hsl(var(--radial-gradient)) , transparent)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [radius]);

  return (
    <div
      className="pointer-events-none w-full h-full absolute z-[-1] top-0 left-0"
      ref={backgroundRef}
    />
  );
};

export default MouseSpotlight;
