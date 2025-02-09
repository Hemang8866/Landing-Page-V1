import HeaderImage from "@/assets/images/mobile/header.png";
import Button from "../ui/Button";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row-reverse">
      <img
        src={HeaderImage}
        alt="Header Image"
        className="flex sm:hidden aspect-auto"
      />
      <div className="flex flex-col gap-y-16 px-40 py-24">
        <span className="text-defaultH leading-heading text-neutral-90 font-semibold">
          Central Texas Fly Fishing
        </span>
        <span className="text-medium font-normal leading-medium text-neutral-60">
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
          cursus vestibulum, facilisi ac, sed faucibus.
        </span>
        <span className="mt-16">
          <Button size="large" variant="primary">
            Get started
          </Button>
        </span>
      </div>
    </header>
  );
};

export default Header;
