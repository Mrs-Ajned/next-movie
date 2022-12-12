export default function Footer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 text-white">
      <div className="py-16 px-8 bg-[#3D3D3D] ">
        <h1 className="mb-12 text-6xl font-semibold">PcariMovie</h1>
        <p className="my-12 font-light">
          Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
        <h6 className="font-semibold text-lg">Join Newsletters</h6>
        <div className="w-3/4 relative">
          <div className="w-12 h-12 bg-yellowsh absolute right-4 top-7 flex justify-center items-center rounded-lg">
            <img src="/svg/Vector.svg" alt="arrow" />
          </div>
          <input
            placeholder="Insert your mail here"
            className="my-4 p-6 rounded-lg w-full bg-[#525252] w-100"
          />
        </div>
      </div>
      
      <div className="py-16 px-8 bg-[#2E2E2E] lg:col-span-2">
        <div className="my-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h6 className="mb -4 font-semibold">Product</h6>
            <p className="my-6 font-light">Movies</p>
            <p className="my-6 font-light">Tv Show</p>
            <p className="my-6 font-light">Videos</p>
          </div>

          <div>
            <h6 className="mb -4 font-semibold">Media Group</h6>
            <p className="my-6 font-light">Nice Studio</p>
            <p className="my-6 font-light">Nice News</p>
            <p className="my-6 font-light">Nice Tv</p>
          </div>

          <div>
            <h6 className="mb -4 font-semibold">Sitemap</h6>
            <p className="my-6 font-light">About</p>
            <p className="my-6 font-light">Careers</p>
            <p className="my-6 font-light">Press</p>
          </div>
        </div>
        <div className="my-6 flex flex-wrap justify-between">
          <div>
            <img className="inline mr-2" src="/imgs/Location.png" alt="icon" />
            <span className="font-sm">
              8819 Ohio St. South Gate, California 90280
            </span>
          </div>

          <div>
            <img className="inline mr-2" src="/imgs/Mail.png" alt="icon" />
            <span className="font-sm">ourstudio@hello.com</span>
          </div>

          <div>
            <img className="inline mr-2" src="/imgs/Phone.png" alt="icon" />
            <span className="font-sm">+271 386-647-3637</span>
          </div>
        </div>
      </div>
    </div>
  );
}
