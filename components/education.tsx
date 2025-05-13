interface EducationProps {
  data: Education[];
}

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <div data-section id="education" className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest">
        Education
      </h2>
      {data.map((object, index) => (
        <div
          key={`${object.subject}+${object.startDate}+${index}`}
          className="relative group flex flex-row mb-8 p-5 transition-all hover:bg-secondary/25 border-t-2 border-transparent hover:border-secondary/25 rounded-lg  hover:text-primary"
        >
          <div className="mr-2 text-gray-400  text-xs basis-1/4">
            {object.startDate} {object.endDate ? `- ${object.endDate}` : ""}
          </div>
          <div className="basis-3/4">
            <p className="font-medium transition-all">
              {object.subject} ({object.degree})
            </p>
            <div className="text-gray-400  mb-8">{object.university}</div>
            <div className="text-gray-400 ">{object.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
