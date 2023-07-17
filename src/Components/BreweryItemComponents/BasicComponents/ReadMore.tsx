import { useEffect, useRef, useState } from "react";
import { BreweryType } from "../../../assets/interfaces";
import Overlay from "../DetailedComponents/Overlay";

export default function ReadMore({
  brewery,
}: {
  brewery: BreweryType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={ref}>
        <button
          className="text-xs border-2 border-neutral-500 w-full px-6 rounded-xl"
          onClick={() => setIsClicked(true)}
        >
          read more
        </button>
        {isClicked && <Overlay data={brewery} setIsClicked={setIsClicked} />}
      </div>
    </>
  );
}
