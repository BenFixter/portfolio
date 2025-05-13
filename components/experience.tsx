import { BorderBeam } from "./ui/border-beam";

interface ExperienceProps {
  data: Experience[];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <div data-section id="experiences" className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest">
        Experiences
      </h2>
      {data.map((experience, index) => (
        <div
          key={`${experience.title}+${experience.startDate}+${index}`}
          className="relative group flex flex-row mb-8 p-5 transition-all hover:bg-secondary/20 border-t-2 border-transparent hover:border-secondary/25 rounded-lg  hover:text-primary"
        >
          <div className="basis-3/4 flex flex-col grow">
            <p className="font-medium transition-all">
              {experience.title} | {experience.company}
            </p>
            <p className="mb-2 text-gray-400">
              {experience.startDate} - {experience.endDate}
            </p>
            <p className="text-gray-400  mb-8">{experience.description}</p>
            <div className="flex flex-row flex-wrap">
              {experience.skills
                ? experience.skills.map((skill, index) => (
                  <div
                    key={`${skill}+${index}`}
                    className="bg-primary/15 bg-opacity-50 py-1 px-3 rounded-full text-xs mr-2 mb-2 cursor-auto text-primary"
                  >
                    {skill}
                  </div>
                ))
                : ""}
            </div>
          </div>
          <BorderBeam
            duration={8}
            size={200}
            className="group-hover:block hidden from-transparent via-primary to-transparent"
          />
        </div>
      ))}
    </div>
  );
};

export default Experience;
