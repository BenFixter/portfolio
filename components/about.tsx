interface AboutProps {
  data: General;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <div
      data-section
      id="about"
      className="flex flex-col items-center mb-16 justify-center group"
    >
      <p className="text-gray-400 text-base mb-6">{data.about}</p>
    </div>
  );
};

export default About;
