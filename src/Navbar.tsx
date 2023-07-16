import { useNavigate } from "react-router-dom";
import TXTLOGO from "/typefontLOGO.svg";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gradient-to-r from-white to-neutral-700 sticky top-0 z-50 w-full h-[10vh] text-neutral-500 flex  justify-between items-center md:px-10 px-5">
        <div className="flex justify-center items-center gap-5 font-bold">
          <button onClick={() => navigate("/")}>Search</button>
          <button onClick={() => navigate("favourites")}>Favourites</button>
        </div>
        <img
          src={TXTLOGO}
          className="object-contain w-[30vw] md:w-[15vw] md:h-[7vh]"
        />
      </div>
    </>
  );
}
