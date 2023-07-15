import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-black/90 sticky top-0 z-50 w-full h-[10vh] text-white flex  justify-between items-center md:px-10 px-5">
        <div className="flex justify-center items-center gap-5 font-bold">
          <button onClick={() => navigate("/")}>Search</button>
          <button onClick={() => navigate("favourites")}>Favourites</button>
        </div>
      </div>
    </>
  );
}
