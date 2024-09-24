const ServiceCard = ({ image, title, description, extraImage }) => {
  return (
    <div className="w-[90%] flex flex-col justify-center items-start gap-4 border border-[#444444] bg-gradient-to-br from-[#282828] to-[#1f1f1f] px-4 py-6 rounded-2xl">
      <div className="bg-white px-3 py-3 rounded-md inline-block">
        <img src={image} alt={title} />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold">{title}</h4>
        <p className="w-[100%]">{description}</p>
      </div>
      {extraImage && (
        <div>
          <img src={extraImage} alt="Extra Visual" className="rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
