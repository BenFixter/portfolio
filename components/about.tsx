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
      <div className="text-gray-400  text-base">
        {data.about.map((paragraph, index) => {
          // If it's the first paragraph, separate the last character
          if (index === 0 && paragraph.length > 0) {
            const charArray = Array.from(paragraph); // Convert string to array (handles emojis correctly)
            const lastChar = charArray.pop(); // Remove last character safely
            const textWithoutLastChar = charArray.join(""); // Reconstruct the string without the last character

            return (
              <div key={index} className="mb-6 text-foreground">
                {textWithoutLastChar}
                <span className="wave">{lastChar}</span>
              </div>
            );
          }

          return <div key={index}>{paragraph}</div>;
        })}
      </div>
    </div>
  );
};

export default About;
