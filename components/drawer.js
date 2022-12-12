export default function Drawer({ children, show, set }) {
  return show ? (
    <>
      <div
        className="fixed top-0 right-0 w-full h-full backdrop-opacity-90 blur-xl z-10"
        onClick={() => set(false)}
      />
      <div className=" fixed right-0 top-0 bg-body w-3/4 sm:1/2 md:1/4 h-full overflow-hidden z-20 p-8">
        <p
          className="font-bold text-white cursor-pointer"
          onClick={() => set(false)}
        >
          x
        </p>
        {children}
      </div>
    </>
  ) : null;
}
