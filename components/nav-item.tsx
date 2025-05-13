interface NavItemProps {
  href: string;
  name: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, name, active }) => {
  return (
    <a href={href} className="flex flex-row py-3 items-center group">
      <div
        className={
          active
            ? "w-16 h-0.5 bg-foreground mr-4 transition-all group-hover:w-16 group-hover:bg-primary"
            : "w-8 h-0.5 bg-gray-400 mr-4 transition-all group-hover:w-16 group-hover:bg-primary"
        }
      />
      <div
        className={
          active
            ? "transition-all text-foreground group-hover:text-primary"
            : "transition-all text-gray-400  group-hover:text-primary"
        }
      >
        {name}
      </div>
    </a>
  );
};

export default NavItem;
