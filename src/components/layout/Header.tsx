import Button from "../ui/Button";
import Images from "@/assets/images";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col gap-y-24 sm:flex-row-reverse">
      <img
        src={Images.HeaderImage}
        alt="Header Image"
        className="flex sm:hidden aspect-auto object-cover w-full h-[500px]"
      />
      <div className="flex flex-col gap-y-16 px-40 py-24">
        <h1 className="text-defaultH leading-heading text-neutral-90 font-semibold">
          Central Texas Fly Fishing
        </h1>
        <span className="text-medium font-normal leading-medium text-neutral-60">
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </span>
      </div>
      <span className="px-40 pb-32">
        <Button size="large" variant="primary">
          Get started
        </Button>
      </span>
    </header>
  );
};

export default Header;
