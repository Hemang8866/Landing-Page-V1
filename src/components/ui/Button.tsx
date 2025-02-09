import React from "react";

interface Button {
  children: React.ReactNode;
  variant?: "primary" | "hollow" | "subtle";
  size?: "large" | "small";
  onClick?: () => void;
}

const Button: React.FC<Button> = ({
  children,
  variant = "primary",
  size = "large",
  onClick,
}) => {
  const baseStyles =
    "rounded-[4px] font-default font-normal text-center cursor-pointer focus:ring-2 ring-neutral-90 focus:ring-offset-1 focus:rounded-[5px] transition-all duration-150";
  const sizes = {
    large: "px-12 py-8 text-default leading-default",
    small: "px-8 py-4 text-small leading-small",
  };
  const variants = {
    primary:
      "bg-brown-default text-neutral-5 hover:bg-brown-light active:bg-brown-dark",
    hollow:
      "border border-neutral-40 text-neutral-90 hover:bg-neutral-10 active:bg-neutral-20",
    subtle: "bg-neutral-10 hover:bg-neutral-5 active:bg-neutral-20",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
