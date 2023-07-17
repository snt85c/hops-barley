import { useLocation, useNavigate } from "react-router-dom";

export default function NavbarButton({
  text,
  pathname,
}: {
  text: string;
  pathname: string;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <button
      style={{ color: location.pathname === pathname ? "black" : "" }}
      onClick={() => navigate(pathname)}
    >
      {text}
    </button>
  );
}
