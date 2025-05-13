interface VolunteeringProps {
  data: Volunteering[];
}

const Volunteering: React.FC<VolunteeringProps> = ({ data }) => {
  return (
    <div data-section id="volunteering" className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest">
        Volunteering
      </h2>
      {data.map((volunteering, index) => (
        <div
          key={`${volunteering.position}+${volunteering.startDate}+${index}`}
          className="group flex flex-row mb-8 p-5 transition-all bg-background hover:bg-surface-200 hover:text-primary-300"
        >
          <div className="mr-2 text-gray-400  text-xs basis-1/4">
            {volunteering.startDate}
            {volunteering.endDate ? `- ${volunteering.endDate}` : ""}
          </div>
          <div className="basis-3/4 flex flex-col">
            <a
              href={volunteering.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-all"
            >
              {volunteering.position} at {volunteering.event}
            </a>
            <a
              href={volunteering.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400  mb-8 flex flex-row items-center"
            >
              <span>{volunteering.organisation}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3 ml-1 invisible transition ease-in-out scale-50 group-hover:visible group-hover:scale-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
            <div className="text-gray-400 ">{volunteering.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Volunteering;
