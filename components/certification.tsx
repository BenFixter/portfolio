import Image from "next/image";

interface CertificationProps {
  data: Certification[];
}

const Certification: React.FC<CertificationProps> = ({ data }) => {
  console.log(data);
  return (
    <div data-section id="certifications" className="mb-16">
      <h2 className="mb-8 visible lg:invisible font-medium tracking-widest">
        Certifications
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {data.map((cert, index) => (
          <a
            key={`${cert.name}+${index}`}
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4 p-4 md:p-5 transition-all bg-secondary/20 border-t-2 border-secondary rounded-lg hover:border-primary/25 hover:text-primary hover:scale-105 hover:brightness-100 hover:z-10 "
          >
            <Image
              src={cert.badgeURL}
              width={100}
              height={100}
              alt={cert.name}
            />
            <div className="basis-3/4">
              <p className="font-medium transition-all">{cert.name}</p>
              <div className="text-gray-400  mb-8">{cert.authority}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certification;
