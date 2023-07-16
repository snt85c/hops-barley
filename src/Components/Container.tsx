import LOGO from "/LOGO.svg";
export default function Container({ children }: { children: JSX.Element }) {
  return (
    <div className="md:mx-20 mx-5 relative flex justify-center items-center select-none">
      <img src={LOGO} className="fixed right-0 top-0 z-10 opacity-10 h-full" />
      <div className="z-20">{children}</div>
    </div>
  );
}
