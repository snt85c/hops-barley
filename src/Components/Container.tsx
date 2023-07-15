export default function Container({ children }: { children: JSX.Element }) {
  return (
    <div className="md:mx-20 mx-5 relative flex justify-center items-center select-none">
      <div>{children}</div>
    </div>
  );
}
