import LOGO from "/LOGO.svg";


export default function LoadingOverlay() {

  return (
    <div className="absolute top-0 left-0 min-w-[100vw] min-h-[100vh] bg-white z-[100] fadeOutAnimation">
      <img src={LOGO} className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain w-[1/3] bg-white" />
    </div>
  );
}
