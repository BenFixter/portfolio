"use client";
import About from "@/components/about";
import Certification from "@/components/certification";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Header from "@/components/header";
import MouseSpotlight from "@/components/MouseSpotlight";
import Projects from "@/components/projects";
import ScrollToTop from "@/components/scrollToTop";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchData = async (lang: string): Promise<Data> => {
  const response = await fetch(`/api/data?lang=${lang}`);
  if (!response.ok) {
    throw new Error("Error loading data");
  }
  return response.json();
};

export default function Home() {
  const [language] = useState<string>("en");

  const { data, error } = useQuery({
    queryKey: ["data", language],
    queryFn: () => fetchData(language),
    staleTime: 5 * 60 * 1000,
  });

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  console.log("data", data);

  return (
    <main
      className={`relative flex min-h-screen flex-col items-center py-24 px-6 lg:px-24 overflow-hidden transition-opacity duration-500 ${
        data ? "opacity-100" : "opacity-0"
      }`}
      style={{ transition: "background 0.2s ease-out" }}
    >
      <MouseSpotlight radius={500} />
      {data && (
        <div className="z-2 w-full max-w-6xl font-mono text-sm flex flex-col lg:flex-row justify-between">
          <Header data={data.general} />
          <div className="lg:pl-[50%]">
            <About data={data.general} />
            <Experience data={data.experiences} />
            <Education data={data.education} />
            <Certification data={data.certifications} />
            <Projects data={data.projects} />
          </div>
        </div>
      )}

      <ScrollToTop />
    </main>
  );
}
