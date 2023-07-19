import { useState } from "react";

/**
 * BreweryLogo component displays the logo of a brewery by using logo.clearbit.
 * @param url - The URL of the logo image.
 */
export default function BreweryLogo({ url }: { url: string }) {
  const [error, setError] = useState(false);
  const [loaded, setIsLoaded] = useState(false);

  /**
   * If the URL is empty or an error occurred while loading the image,
   * the component returns a placeholder instead.
   */
  if (!url || error)
    return (
      <div className=" flex justify-center items-center w-[100px] h-[100px] rounded-xl bg-neutral-300">
        <div className="text-white">no logo</div>
      </div>
    );

  return (
    <div className="relative h-[100px] w-[100px]">
      <img
        onError={() => setError(true)}
        onLoad={() => setIsLoaded(true)}
        src={`https://logo.clearbit.com/${url}`}
        className="rounded-xl h-[100px] w-[100px] object-cover"
      />
      {!loaded && (
        <div className="absolute top-0 left-0 flex justify-center items-center w-[100px] h-[100px] rounded-xl bg-neutral-300 animate-pulse">
          <div className="text-white">loading</div>
        </div>
      )}
    </div>
  );
}
