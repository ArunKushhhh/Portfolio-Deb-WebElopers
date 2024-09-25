import Gmail from "../assets/gmail.png";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <div className="w-[100%] flex flex-col gap-8 justify-center items-center">
      <div className="w-[100%] flex justify-between items-center px-4">
        <h3 className="text-2xl font-semibold">Let&apos;s Work Together -</h3>
        <button className="flex gap-2 items-center justify-center py-2 px-4 border border-[#484E53] rounded-full">
          <img src={Gmail} alt="Gmail" className="w-6" />
          <p className="text-xs">3ans.connect@gmail.com</p>
        </button>
      </div>

      {/* hr */}
      <div className="w-[100%] h-[1px] bg-[#484E53]"></div>

      {/* links */}
      <div className="w-[100%] flex flex-col gap-2 self-start px-4">
        <div className="w-[100%] flex justify-between sm:gap-10 sm:justify-normal">
          <div className="w-[200px] flex gap-2 items-center">
            <img src={Github} alt="Github" className="px-2 py-2" />
            <a href="https://github.com/ArunKushhhh" className="text-xs">
              ArunKushhhh
            </a>
          </div>
          <div className="w-[200px] flex gap-2 items-center">
            <img src={Linkedin} alt="Github" className="px-2 py-2" />
            <a
              href="https://www.linkedin.com/in/arun-kumar-kushwaha-b26085286/"
              className="text-xs"
            >
              Arun Kushwaha
            </a>
          </div>
        </div>
        <div className="w-[100%] flex justify-between sm:gap-10 sm:justify-normal">
          <div className="w-[200px] flex gap-2 items-center">
            <img src={Github} alt="Github" className="px-2 py-2" />
            <a href="https://github.com/NishantSinghhhhh" className="text-xs">
              NishantSinghhhhh
            </a>
          </div>
          <div className="w-[200px] flex gap-2 items-center">
            <img src={Linkedin} alt="Github" className="px-2 py-2" />
            <a
              href="https://www.linkedin.com/in/nishant-singh-8a5a00282/"
              className="text-xs"
            >
              Nishant Singh
            </a>
          </div>
        </div>
        <div className="w-[100%] flex justify-between sm:gap-10 sm:justify-normal">
          <div className="w-[200px] flex gap-2 items-center">
            <img src={Github} alt="Github" className="px-2 py-2" />
            <a href="https://github.com/Sriijannn" className="text-xs">
              Sriijannn
            </a>
          </div>
          <div className="w-[200px] flex gap-2 items-center">
            <img src={Linkedin} alt="Github" className="px-2 py-2" />
            <a
              href="https://www.linkedin.com/in/srijantripathii/"
              className="text-xs"
            >
              Srijan Tripathi
            </a>
          </div>
        </div>
        <div className="w-[100%] flex justify-between sm:gap-10 sm:justify-normal">
          <div className="w-[200px] flex gap-2 items-center">
            <img src={Github} alt="Github" className="px-2 py-2" />
            <a href="https://github.com/ujjuishere" className="text-xs">
              ujjuishere
            </a>
          </div>
          <div className="w-[200px] flex gap-2 items-center">
            <img src={Linkedin} alt="Github" className="px-2 py-2" />
            <a
              href="https://www.linkedin.com/in/ujjwal--gupta/"
              className="text-xs"
            >
              Ujjwal Gupta
            </a>
          </div>
        </div>
      </div>

      {/* end */}
      <div className="text-xs mb-6">©️ 2024 all rights reserved.</div>
    </div>
  );
};

export default Footer;
