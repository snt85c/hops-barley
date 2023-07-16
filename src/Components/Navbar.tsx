import { useLocation, useNavigate } from "react-router-dom";
import TXTLOGO from "/typefontLOGO.svg";
export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="bg-gradient-to-r from-white to-neutral-700 sticky top-0 z-50 w-full h-[10vh] text-neutral-500 flex  justify-between items-center md:px-10 px-5 shadow-lg shadow-neutral-200">
        <div className="flex justify-center items-center gap-5 font-bold">
          <button
            style={{ color: location.pathname === "/" ? "black" : "" }}
            onClick={() => navigate("/")}
          >
            Search
          </button>
          <button
            style={{
              color: location.pathname === "/favourites" ? "black" : "",
            }}
            onClick={() => navigate("favourites")}
          >
            Favourites
          </button>
        </div>
        <img
          src={TXTLOGO}
          className="object-contain w-[30vw] md:w-[15vw] md:h-[7vh]"
        />
      </div>
    </>
  );
}
