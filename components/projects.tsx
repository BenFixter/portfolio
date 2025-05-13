interface ProjectsProps {
  data: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <div data-section id="projects" className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((project, index) => (
          <a
            key={`${project.name}+${index}`}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-4 md:p-5 transition-all bg-secondary/20 border-t-2 border-secondary rounded-lg hover:border-primary/25 hover:text-primary hover:scale-105 hover:brightness-100 hover:z-10 md:h-[300px]"
          >
            <div className="flex text-gray-400 mb-2 md:mb-4">
              <div className="text-xs font-medium tracking-widest uppercase">
                {project.framework}
              </div>
            </div>

            <h1 className="mb-2 md:mb-4 text-xl flex items-center gap-2">
              {project.name}
            </h1>
            <div className="text-gray-400 text-xs line-clamp-6">
              {project.description}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
