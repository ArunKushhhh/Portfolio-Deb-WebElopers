// src/components/Services.js
import ServiceCard from "./Servicecard";
import Service from "../assets/services.svg";
import Chatbot from "../assets/aichatbot.png";

const Services = () => {
  const serviceDescription =
    "From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.";

  return (
    <div
      id="services"
      className="w-[100%] flex flex-col items-center justify-center gap-8"
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="about-us text-5xl">What We Do</h3>
        <h4 className="bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent font-semibold">
          Our Services
        </h4>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-8">
        <ServiceCard
          image={Service}
          title="Data Analytics & Visualization"
          description={serviceDescription}
        />
        <ServiceCard
          image={Service}
          title="Data Analytics & Visualization"
          description={serviceDescription}
        />
        <ServiceCard
          image={Service}
          title="Data Analytics & Visualization"
          description={serviceDescription}
        />
        <ServiceCard
          image={Service}
          title="Data Analytics & Visualization"
          description={serviceDescription}
          extraImage={Chatbot} // Passing an extra image prop for the chatbot
        />
        <ServiceCard
          image={Service}
          title="Data Analytics & Visualization"
          description={serviceDescription}
        />
      </div>
    </div>
  );
};

export default Services;
