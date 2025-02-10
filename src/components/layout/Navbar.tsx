import LogoMobile from "@/assets/icons/mobile/Logo.svg?react";
import LogoDesktop from "@/assets/icons/Logo.svg?react";
import Menu from "@/assets/icons/Menu.svg?react";
import { navContent } from "@/utils/links";
import { NavItem } from "@/types";
import { useState } from "react";
import cx from "classnames";
import Button from "../ui/Button";

const Navbar: React.FC = () => {
  const { mainNav } = navContent;
  const [activeTab, setActiveTab] = useState<string>("Home");

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <nav className="lg:container lg:mx-auto flex justify-between items-center py-8 px-24 xl:px-80 h-[56px]">
      <span className="flex md:hidden">
        <LogoMobile />
      </span>
      <div className="md:flex md:gap-x-12 md:items-center hidden">
        <LogoDesktop />
        <h2 className="font-alternate font-normal text-medium leading-[0.8825] text-brown-default">
          Central Texas Fly Fishing
        </h2>
      </div>
      <span className="flex md:hidden">
        <Button variant="icon">
          <Menu />
        </Button>
      </span>
      <div className="hidden md:flex md:items-center md:gap-x-24">
        {mainNav.map((navItem: NavItem) => (
          <a
            href={`#${navItem.url.replace("/", "")}`}
            key={navItem.url}
            onClick={() => changeTab(navItem.name)}
            className={cx(
              "py-2 border-b-2 w-max border-b-transparent text-default font-normal leading-default text-neutral-90 font-default cursor-pointer transition-all duration-150 hover:border-b-2 hover:border-b-neutral-90",
              {
                "border-b-2 !border-b-neutral-90": activeTab === navItem.name,
              }
            )}
          >
            {navItem.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
