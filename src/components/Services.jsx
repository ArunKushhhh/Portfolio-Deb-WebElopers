import Service from "../assets/services.svg";
import Chatbot from "../assets/aichatbot.png";

const Services = () => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="about-us text-5xl">What We Do</h3>
        <h4 className="bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent font-semibold">
          Our Services
        </h4>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-8">
        <div className="w-[90%] flex flex-col justify-center items-start gap-4 border border-[#444444] bg-gradient-to-br from-[#282828] to-[#1f1f1f] px-4 py-6 rounded-2xl">
          <div className="bg-white px-3 py-3 rounded-md inline-block">
            <img src={Service} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold"> Data Analytics & Visualization</h4>
            <p className="w-[100%]">
              From data inception to actionable insights, I design compelling
              analytics and visualization solutions that illuminate trends,
              empower decision-making, and drive your business forward.
            </p>
          </div>
        </div>
        <div className="w-[90%] flex flex-col justify-center items-start gap-4 border border-[#444444] bg-gradient-to-br from-[#282828] to-[#1f1f1f] px-4 py-6 rounded-2xl">
          <div className="bg-white px-3 py-3 rounded-md inline-block">
            <img src={Service} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold"> Data Analytics & Visualization</h4>
            <p className="w-[100%]">
              From data inception to actionable insights, I design compelling
              analytics and visualization solutions that illuminate trends,
              empower decision-making, and drive your business forward.
            </p>
          </div>
        </div>
        <div className="w-[90%] flex flex-col justify-center items-start gap-4 border border-[#444444] bg-gradient-to-br from-[#282828] to-[#1f1f1f] px-4 py-6 rounded-2xl">
          <div className="bg-white px-3 py-3 rounded-md inline-block">
            <img src={Service} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold"> Data Analytics & Visualization</h4>
            <p className="w-[100%]">
              From data inception to actionable insights, I design compelling
              analytics and visualization solutions that illuminate trends,
              empower decision-making, and drive your business forward.
            </p>
          </div>
        </div>
        <div className="w-[90%] flex flex-col justify-center items-start gap-4 border border-[#444444] bg-gradient-to-br from-[#282828] to-[#1f1f1f] px-4 py-6 rounded-2xl">
          <div className="bg-white px-3 py-3 rounded-md inline-block">
            <img src={Service} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold"> Data Analytics & Visualization</h4>
            <p className="w-[100%]">
              From data inception to actionable insights, I design compelling
              analytics and visualization solutions that illuminate trends,
              empower decision-making, and drive your business forward.
            </p>
          </div>
          <div>
            <img src={Chatbot} alt="AI Chatbot" className="rounded-lg" />
          </div>
        </div>
        <div className="w-[90%] flex flex-col justify-center items-start gap-4 border border-[#444444] bg-gradient-to-br from-[#282828] to-[#1f1f1f] px-4 py-6 rounded-2xl">
          <div className="bg-white px-3 py-3 rounded-md inline-block">
            <img src={Service} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold"> Data Analytics & Visualization</h4>
            <p className="w-[100%]">
              From data inception to actionable insights, I design compelling
              analytics and visualization solutions that illuminate trends,
              empower decision-making, and drive your business forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
