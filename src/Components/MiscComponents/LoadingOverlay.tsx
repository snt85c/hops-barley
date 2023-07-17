import { useEffect, useState } from "react";
import LOGO from "/LOGO.svg";

//** simulates a loading by showing the logo on a white background. the useEffect will remove the state from true to false after 1950ms, so not to interact with the css wich will make it disappear in 200ms */
export default function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let interval = setInterval(() => {
      document.body.style.overflow = "auto";
      setIsLoading(false);
    }, 1950);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="absolute top-0 left-0 min-w-[100vw] min-h-[100vh] bg-white z-[100] fadeOutAnimation">
          <img
            src={LOGO}
            className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain w-[1/3] bg-white"
          />
        </div>
      )}
    </>
  );
}
