import { useEffect, useRef, useState } from "react";
import { BreweryType } from "../../../assets/interfaces";
import Overlay from "../DetailedComponents/Overlay";

/**
 * ReadMore component provides a button to expand and show more information about a brewery.
 * An event listener will detect when the user is clicking outiside the overlay once it's opened
 * thus, closing it.
 * @param brewery - BreweryType object containing information about the brewery.
 */
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
