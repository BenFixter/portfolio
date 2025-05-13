import Navigation from "./navigation";
import Socials from "./socials";

interface HeaderProps {
  data: General;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <div className="lg:fixed h-screen basis-1.5/4 flex flex-col pb-48 justify-center lg:self-auto lg:w-1/5">
      <div>
        <h1 className="text-5xl hover-underline font-bold subpixel-antialiased tracking-wide">
          {data.name}
        </h1>
        <h1 className="text-xl font-normal pt-2 subpixel-antialiased tracking-wide">
          {data.title}
        </h1>

        <h3 className="text-gray-400 pt-2 text-base font-normal tracking-wider">
          {data.headline}
        </h3>
      </div>
      <div className="grow">
        <Navigation />
      </div>
      <div>
        <Socials data={data.socials} />
      </div>
    </div>
  );
};

export default Header;
