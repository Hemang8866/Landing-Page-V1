import Button from "../ui/Button";
import Images from "@/assets/images";

const Header: React.FC = () => {
  return (
    <header className="lg:container lg:mx-auto flex flex-col md:flex-row-reverse md:justify-between md:items-center md:px-24 md:py-24 xl:py-80 xl:px-80 md:gap-x-24 gap-x-0">
      <img
        src={Images.HeaderImageM}
        alt="Central Texas Fly Fishing"
        className="flex md:hidden object-center aspect-auto object-cover"
      />
      <img
        src={Images.HeaderImage}
        alt="Central Texas Fly Fishing"
        className="hidden md:flex object-center aspect-auto w-[400px] h-[300px]"
      />
      <div className="flex flex-col md:justify-center gap-y-16 py-40 md:py-24 md:px-0 px-24 max-w-lg">
        <h1 className="text-defaultH lg:text-largeH leading-heading text-neutral-90 font-semibold">
          Central Texas Fly Fishing
        </h1>
        <span className="text-medium font-normal leading-medium text-neutral-60">
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </span>
        <span>
          <Button size="large" variant="primary">
            Get started
          </Button>
        </span>
      </div>
    </header>
  );
};

export default Header;
