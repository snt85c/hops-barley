import { useState } from "react";

export default function BreweryLogo({ url }: { url: string }) {
  const [error, setError] = useState(false);
  const [loaded, setIsLoaded] = useState(false);

  if (!url || error) return null;

  return (
    <div className="h-[100px] w-[100px]">
      <img
        onError={() => setError(true)}
        onLoad={() => setIsLoaded(true)}
        src={`https://logo.clearbit.com/${url}`}
        className="rounded-xl  h-[100px] w-[100px]"
      />
      {!loaded && (
        <div className="flex justify-center items-center w-[100px] h-[100px] rounded-xl bg-neutral-300 animate-pulse">
          {" "}
          <div className="text-white">loading</div>
        </div>
      )}
    </div>
  );
}
