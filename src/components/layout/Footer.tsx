import Logo from "@/assets/icons/Logo.svg?react";
import Facebook from "@/assets/icons/Facebook.svg?react";
import Instagram from "@/assets/icons/Instagram.svg?react";
import Linkedin from "@/assets/icons/Linkedin.svg?react";
import { navContent } from "@/utils/links";
import { NavItem } from "@/types";

const Footer: React.FC = () => {
  const { footerNav } = navContent;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-90">
      <div className="lg:container lg:mx-auto flex flex-col gap-y-36 p-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-16">
          <div className="flex flex-col md:flex-row items-center gap-x-24 gap-y-16 md:gap-y-0">
            <span className="logo-light">
              <Logo />
            </span>
            <NavLinks footerNav={footerNav} />
          </div>
          <SocialIcons />
        </div>
        <span className="text-neutral-30 text-caption leading-caption font-normal text-center">
          © {currentYear} Central Texas Fly Fishing. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

const NavLinks: React.FC<{ footerNav: NavItem[] }> = ({ footerNav }) => (
  <div className="flex gap-x-24 items-center">
    {footerNav.map((navItem) => (
      <a
        href={`#${navItem.url.replace("/", "")}`}
        key={navItem.url}
        className="footer-links"
      >
        {navItem.name}
      </a>
    ))}
  </div>
);

const SocialIcons: React.FC = () => {
  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" },
  ];

  return (
    <div className="flex gap-x-8 items-center">
      {socialIcons.map(({ Icon, href }, index) => (
        <a
          key={index}
          href={href}
          className="flex justify-center items-center logo-social-light w-40 h-40"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default Footer;
