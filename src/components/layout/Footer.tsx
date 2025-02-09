import Logo from "@/assets/icons/Logo.svg?react";
import Facebook from "@/assets/icons/Facebook.svg?react";
import Instagram from "@/assets/icons/Instagram.svg?react";
import Linkedin from "@/assets/icons/Linkedin.svg?react";

const Footer: React.FC = () => {
  const socialIconClass = "flex justify-center logo-social-light w-40 h-40";
  return (
    <footer className="flex flex-col gap-y-[36px] bg-neutral-90 p-24">
      <div className="flex flex-col gap-y-16 justify-between items-center">
        <span className="logo-light">
          <Logo />
        </span>
        <div className="flex gap-x-24 items-center">
          <a href="#">FAQ</a>
          <a href="#">Privacy</a>
          <a href="#">Support</a>
          <a href="#">Contact</a>
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
        © {new Date().getFullYear()} Central Texas Fly Fishing All Rights
        Reserved.
      </span>
    </footer>
  );
};

export default Footer;
