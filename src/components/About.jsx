const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="about-us text-5xl">About Us</h3>
        <h4 className="bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent font-semibold">
          Get To Know Us
        </h4>
      </div>
      <div className="flex flex-col text-[14px] gap-6 max-w-[80%] text-center">
        <p>
          Hi there! We are Deb WelElopers, a data scientist specializing in data
          analytics, predictive modeling, natural language processing, machine
          learning, and AI chatbots. With a passion for unraveling insights from
          complex datasets, we are dedicated to helping businesses make informed
          decisions and stay ahead in current data-driven world.`
        </p>
        <p>
          I bring a blend of technical expertise, hands-on experience, and a
          commitment to clear communication to every project. Whether it is
          uncovering hidden patterns, predicting future trends, or automating
          processes with AI, we are here to help you harness the full potential
          of your data.
        </p>
        <p>
          Let us work together to transform your data into actionable insights
          that drive real results. Get in touch, and let us start unlocking the
          power of your data today!
        </p>
      </div>
      <div className="flex justify-center items-center px-8 py-2  border border-[#4FC3F7]  rounded-full">
        <button className="flex justify-center items-center">Download Resume</button>
      </div>
    </div>
  );
};

export default About;
