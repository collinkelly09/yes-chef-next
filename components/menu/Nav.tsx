import Hero from "../Hero";
import Menu from "./Menu";

const Nav = () => {
  return (
    <div className="relative w-full h-32 md:h-36">
      <Menu />
      <div className="absolute inset-0 flex justify-center md:mt-28 items-center">
        <Hero />
      </div>
    </div>
  );
};

export default Nav;
