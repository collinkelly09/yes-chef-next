import Hero from "../Hero";
import Menu from "./Menu";

const Nav = () => {
  return (
    <div className="md:relative z-10 fixed w-full h-32 md:h-36 ">
      <div className="bg-white h-16" />
      <div className="bg-gradient-to-b from-white/100 to-white/0 pt-20" />

      <Menu />
      <div className="absolute inset-0 flex justify-center md:mt-28 items-center">
        <Hero />
      </div>
    </div>
  );
};

export default Nav;
