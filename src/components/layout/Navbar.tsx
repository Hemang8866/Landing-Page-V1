import LogoMobile from "@/assets/icons/mobile/Logo.svg?react";
import LogoDesktop from "@/assets/icons/Logo.svg?react";
import Menu from "@/assets/icons/Menu.svg?react";
import Close from "@/assets/icons/Close.svg?react";
import { navContent } from "@/utils/links";
import { NavItem } from "@/types";
import { useState } from "react";
import cx from "classnames";
import Button from "../ui/Button";

const Navbar: React.FC = () => {
  const { mainNav } = navContent;
  const [activeTab, setActiveTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabChange = (tab: string) => setActiveTab(tab);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="relative lg:container lg:mx-auto flex justify-between items-center py-8 px-24 xl:px-80 h-[56px]">
      <div className="md:flex md:gap-x-12 md:items-center hidden">
        <LogoDesktop />
        <h2 className="font-alternate font-normal text-medium leading-[0.8825] text-brown-default">
          Central Texas Fly Fishing
        </h2>
      </div>
      <span className="flex md:hidden">
        <LogoMobile />
      </span>
      <div className="flex md:hidden">
        <Button variant="icon" onClick={toggleMenu}>
          {menuOpen ? <Close /> : <Menu />}
        </Button>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        className={cx(
          "absolute top-56 left-0 w-full bg-neutral-5 text-neutral-90 p-24 shadow-lg z-50 transition-transform duration-300 ease-in-out",
          {
            "opacity-100 translate-y-0": menuOpen,
            "opacity-0 -translate-y-4 pointer-events-none": !menuOpen,
          }
        )}
      >
        <MobileNav
          mainNav={mainNav}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>
      <DesktopNav
        mainNav={mainNav}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
    </nav>
  );
};

const MobileNav: React.FC<{
  mainNav: NavItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}> = ({ mainNav, activeTab, onTabChange }) => (
  <div className="flex flex-col gap-y-16">
    {mainNav.map((navItem) => (
      <NavLink
        key={navItem.url}
        navItem={navItem}
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
    ))}
  </div>
);

const DesktopNav: React.FC<{
  mainNav: NavItem[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}> = ({ mainNav, activeTab, onTabChange }) => (
  <div className="hidden md:flex md:items-center md:gap-x-24">
    {mainNav.map((navItem) => (
      <NavLink
        key={navItem.url}
        navItem={navItem}
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
    ))}
  </div>
);

const NavLink: React.FC<{
  navItem: NavItem;
  activeTab: string;
  onTabChange: (tab: string) => void;
}> = ({ navItem, activeTab, onTabChange }) => (
  <a
    href={`#${navItem.url.replace("/", "")}`}
    onClick={() => onTabChange(navItem.name)}
    className={cx(
      "py-2 border-b-2 w-max border-b-transparent text-default font-normal leading-default text-neutral-90 font-default cursor-pointer transition-all duration-150 hover:border-b-2 hover:border-b-neutral-90",
      { "border-b-2 !border-b-neutral-90": activeTab === navItem.name }
    )}
  >
    {navItem.name}
  </a>
);

export default Navbar;
