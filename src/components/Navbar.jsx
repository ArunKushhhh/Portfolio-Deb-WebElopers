import DWlogo from "../assets/DWlogo.svg";

const Navbar = () => {
  return (
    <div className="w-[100%] flex justify-between items-center px-4 py-4 relative bg-[#1a1a1a]">
        {/* logo */}
      <div className="w-[122px]">
        <img src={DWlogo} alt="logo" className="" />
      </div>
      {/* nav bar */}
      <div className="hidden md:flex">
        <ul className="flex gap-5">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Resume</a>
          </li>
        </ul>
      </div>
      {/* contact us button and hamburger */}
      <div className="flex gap-5">
        {/* contact us */}
        <div>
          <button className="border border-1 px-4 py-2 rounded-lg border-[#4FC3F7] text-sm">
            Contact Us
          </button>
        </div>
        {/* hamburger */}
        <div className="w-6 flex flex-col gap-1 justify-center cursor-pointer md:hidden">
          <div className="w-3 h-[2px] bg-white"></div>
          <div className="w-6 h-[2px] bg-white"></div>
          <div className="w-3 h-[2px] bg-white self-end"></div>
        </div>
      </div>
      {/* <div className="h-auto w-[100%] absolute top-0 left-0 bg-[#1a1a1a] border-b border-b-[#4FC3F7]">
      <ul className="flex flex-col gap-5 px-4 py-4 flex-wrap items-center justify-center">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Resume</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
