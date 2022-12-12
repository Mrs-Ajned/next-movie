import { useRouter } from "next/router";
import { useState } from "react";
import Drawer from "./drawer";

export default function Navigation() {
  const router = useRouter();
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  const navItemWrap = "hidden lg:block";
  const navItemClass =
    "hover:font-semibold hover:border-b-4 hover:border-yellow-500 border-b-4 border-transparent pb-2 cursor-pointer ease-out duration-400";
  const navItemActiveClass =
    "font-semibold border-b-4 border-yellow-500 pb-2 cursor-pointer";

  const setClassName = (activePath) => {
    return pathname === activePath ? navItemActiveClass : navItemClass;
  };

  return (
    <div className="py-7 gardiant">
      <Drawer show={open} set={setOpen}>
        <div className="flex space-x-2 justify-center items-center text-white">
          <img
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-white"
            src="/imgs/user.png"
            alt="avatar"
          />
          <p className="text-white">John Glich</p>
        </div>
        <span className={"text-white block my-4 text-center"}>Home</span>
        <span className={"text-white block my-4 text-center"}>Movies</span>
        <span className={"text-white block my-4 text-center"}>Tv Show</span>
        <span className={"text-white block my-4 text-center"}>Video</span>
        <span className={"text-white block my-4 text-center"}>FAQ</span>
        <span className={"text-white block my-4 text-center"}>Pricing</span>
        <span className={"text-white block my-4 text-center"}>Contact Us</span>
      </Drawer>

      <div className="container p-2 md:p-0 mx-auto">
        <div className="flex justify-between lg:justify-around items-center">
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <h4 className="text-white text-2xl font-bold">PcariMovie</h4>
          </div>
          <div className="ml-16 grow lg:grid grid-cols-3 md:grid-cols-7 gap-2 text-white font-normal pb-1 hidden">
            <div onClick={() => router.push("/")}>
              <span className={setClassName("/")}>Home</span>
            </div>
            <div>
              <span className={setClassName("/Movies")}>Movies</span>
            </div>
            <div>
              <span className={setClassName("/Tv")}>Tv Show</span>{" "}
            </div>
            <div className={navItemWrap}>
              <span className={setClassName("/Video")}>Video</span>
            </div>
            <div className={navItemWrap}>
              <span className={setClassName("/FAQ")}>FAQ</span>
            </div>
            <div className={navItemWrap}>
              <span className={setClassName("/Pricing")}>Pricing</span>
            </div>
            <div className={navItemWrap}>
              <span className={setClassName("/Contact")}>Contact Us</span>
            </div>
          </div>

          <div
            className="flex space-x-8 justify-end items-center text-white"
            onClick={() => {
              let param = "date";
              if (router.query.by === "date") param = "time";
              router.push(`/search?by=${param}`);
            }}
          >
            <img
              className="cursor-pointer"
              src="/svg/search.svg"
              alt="search"
            />
            <div className="lg:flex space-x-2 justify-center items-center hidden">
              <img
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-white"
                src="/imgs/user.png"
                alt="avatar"
              />
              <p>John Glich</p>
            </div>

            <div
              className="flex flex-col items-center justify-center border-2  w-11 h-11 border-white rounded-full cursor-pointer lg:hidden"
              onClick={() => setOpen(true)}
            >
              <div className="burger-menu" />
              <div className="burger-menu" />
              <div className="burger-menu" />
              <div className="burger-menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
