interface CreditsProps {
  data: General;
}

const Credits: React.FC<CreditsProps> = ({ data }) => {
  return (
    <div data-section id="credits" className="group">
      <div className="text-gray-400 ">
        <div className="flex flex-row justify-end">
          <span>
            {data.name} | {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Credits;
