export default function Hero({ children }) {
  return (
    <div className="py-7 min-h-full gardiant">
      <div className="container p-2  lg:px-32 md:p-0 mx-auto">
        <div className="py-32 grid grid-cols-2 md:grid-cols-3 gap-4">
          <img className="hidden   md:block" src="/imgs/Container.png" />
          <div className="col-span-2 text-white ">{children}</div>
        </div>
      </div>
    </div>
  );
}
