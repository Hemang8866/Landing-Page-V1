import Logo from "@/assets/icons/mobile/Logo.svg?react";
import Menu from "@/assets/icons/Menu.svg?react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-8 px-24">
      <span className="flex sm:hidden">
        <Logo />
      </span>
      <span className="flex sm:hidden">
        <Menu />
      </span>
    </nav>
  );
};

export default Navbar;
