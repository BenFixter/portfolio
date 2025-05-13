"use client";

import { useEffect, useRef, useState } from "react";
import NavItem from "./nav-item";

// Define the type for the state `activeSection` (string values representing section ids)
const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize IntersectionObserver
    observer.current = new IntersectionObserver(
      (entries) => {
        // Find the first section that enters the viewport
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement);

        // Handle section changes based on the intersection logic
        if (visibleSections.length > 0) {
          const firstVisible = visibleSections[0];

          // Update active section only if it's a different one
          setActiveSection(firstVisible.id);
        }
      },
      {
        rootMargin: "0px 0px -80% 0px", // Adjust for triggering just before the section leaves the viewport
        threshold: 0, // Detect when a section is just entering the viewport
      }
    );

    // Select all sections with `data-section` attribute
    const sections = document.querySelectorAll("[data-section]");

    // Observe each section for visibility
    sections.forEach((section) => observer.current?.observe(section));

    // Cleanup the observer when component is unmounted
    return () => {
      sections.forEach((section) => observer.current?.unobserve(section));
    };
  }, []); // Empty dependency array to ensure it only runs once on mount

  return (
    <div
      id="navigation"
      className="flex flex-col py-10 h-full justify-start font-medium tracking-widest"
    >
      <NavItem active={activeSection === "about"} href="#about" name="ABOUT" />
      <NavItem
        active={activeSection === "experiences"}
        href="#experiences"
        name="EXPERIENCES"
      />
      <NavItem
        active={activeSection === "education"}
        href="#education"
        name="EDUCATION"
      />
      <NavItem
        active={activeSection === "certifications"}
        href="#certifications"
        name="CERTIFICATIONS"
      />
      <NavItem
        active={activeSection === "projects"}
        href="#projects"
        name="PROJECTS"
      />
    </div>
  );
};

export default Navigation;
