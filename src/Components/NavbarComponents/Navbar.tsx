import { Outlet } from "react-router-dom";
import TXTLOGO from "/typefontLOGO.svg";
import NavbarButton from "./NavbarButton";
export default function Navbar() {
  return (
    <>
      <div className="bg-gradient-to-r from-white to-neutral-700 sticky top-0 z-50 w-full h-[10vh] text-neutral-500 flex  justify-between items-center md:px-10 px-5 shadow-lg shadow-neutral-200">
        <div className="flex justify-center items-center gap-5 font-bold">
          <NavbarButton text="Search" pathname="/" />
          <NavbarButton text="Favourites" pathname="/favourites"/>
        </div>
        <img
          src={TXTLOGO}
          className="object-contain w-[30vw] md:w-[15vw] md:h-[7vh]"
        />
      </div>
      <Outlet />
    </>
  );
}
