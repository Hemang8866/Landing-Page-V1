import Logo from "@/assets/icons/Logo.svg?react";
import Facebook from "@/assets/icons/Facebook.svg?react";
import Instagram from "@/assets/icons/Instagram.svg?react";
import Linkedin from "@/assets/icons/Linkedin.svg?react";
import { navContent } from "@/utils/links";
import { NavItem } from "@/types";

const Footer: React.FC = () => {
  const { footerNav } = navContent;
  const socialIconClass = "flex justify-center logo-social-light w-40 h-40";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col gap-y-[36px] bg-neutral-90 p-24">
      <div className="flex flex-col gap-y-16 justify-between items-center">
        <span className="logo-light">
          <Logo />
        </span>
        <div className="flex gap-x-24 items-center">
          {footerNav.map((navItem: NavItem) => (
            <a
              href={`#${navItem.url.replace("/", "")}`}
              key={navItem.url}
              className="footer-links"
            >
              {navItem.name}
            </a>
          ))}
        </div>
        <div className="flex gap-x-8 items-center">
          <a href="#" className={socialIconClass}>
            <Facebook />
          </a>
          <a href="#" className={socialIconClass}>
            <Instagram />
          </a>
          <a href="#" className={socialIconClass}>
            <Linkedin />
          </a>
        </div>
      </div>
      <span className="text-neutral-30 text-caption leading-caption font-normal text-center">
        © {currentYear} Central Texas Fly Fishing All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
