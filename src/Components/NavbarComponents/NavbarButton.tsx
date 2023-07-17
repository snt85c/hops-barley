import { useLocation, useNavigate } from "react-router-dom";

export default function NavbarButton({ text }: { text: string }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <button
      style={{ color: location.pathname === "/" ? "black" : "" }}
      onClick={() => navigate("")}
    >
      {text}
    </button>
  );
}
