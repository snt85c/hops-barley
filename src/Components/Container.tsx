import LOGO from "/LOGO.svg";

/**
 * Container component wraps the content with a container layout. contains a bg image
 * it's used as wrapper for all the routes
 * @param children - The content to be wrapped.
 */
export default function Container({ children }: { children: JSX.Element }) {
  return (
    <div className="md:mx-20 mx-5 relative flex justify-center items-center select-none">
      <img src={LOGO} className="fixed right-0 top-0 z-10 opacity-10 h-full" />
      <div className=" fadeInAnimation z-20">{children}</div>
    </div>
  );
}
