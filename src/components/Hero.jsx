import bg from "../assets/bg.png";
import portfolio from "../assets/portfolio.jpg";

const Hero = () => {
  return (
    <div id="home"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundRepeat: "no-repeat"
      }}
      className="w-[100%] flex flex-col gap-6 justify-center items-center mt-24"
    >
      <div>
        <img
          src={portfolio}
          alt="portfolio image"
          className="rounded-full h-[250px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h3 className="deb-webelopers text-5xl">Deb WebElopers</h3>
        <p className="text-xl bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent font-bold">Data Sorcerers</p>
        <p className="max-w-[80%] text-center text-[14px]">
          As a passionate data scientist, with expertise in machine learning,
          AI, and data analytics, I thrive on the challenges of exploring
          complex data landscapes and uncovering meaningful patterns that drive
          innovation.
        </p>
      </div>
      <div className="flex justify-center items-center px-8 py-2  border border-[#4FC3F7]  rounded-full">
        <a href="#contact">
        <button className="flex justify-center items-center">Contact Us</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
