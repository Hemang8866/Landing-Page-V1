import Button from "../ui/Button";
import Images from "@/assets/images";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col lg:flex-row-reverse">
      <img
        src={Images.HeaderImage}
        alt="Header Image"
        className="flex md:hidden aspect-auto object-cover h-[500px]"
      />
      <div className="flex flex-col gap-y-16 py-40 px-24">
        <h1 className="text-defaultH leading-heading text-neutral-90 font-semibold">
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
