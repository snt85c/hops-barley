import { useState } from "react";

export default function BreweryLogo({ url }: { url: string }) {
  const [error, setError] = useState(false);
  const [loaded, setIsLoaded] = useState(false);

  if (!url || error) return null;
  return (
    <>
      <img
        onError={() => setError(true)}
        onLoad={() => setIsLoaded(true)}
        src={`https://logo.clearbit.com/${url}`}
        className="rounded-xl w-[128px] h-[128px]"
      ></img>
      {!loaded && (
        <div className="flex justify-center items-center w-[128px] h-[128px] rounded-xl bg-neutral-300 animate-pulse">
          {" "}
          <div className="text-white">loading</div>
        </div>
      )}
    </>
  );
}
