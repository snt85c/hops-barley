import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-black sticky top-0 z-50 w-full h-[10vh] text-white flex justify-between items-center md:px-10 px-5">
        <div className="flex justify-center items-center gap-5">
          <button onClick={() => navigate("/")}>search</button>
          <button onClick={() => navigate("favourites")}>fav</button>
        </div>
      </div>
    </>
  );
}
