import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
    } else {
      console.log("Validation errors:", errors);
    }
  };

  return (
    <form className="w-[100%] px-6 flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h3 className="about-us text-5xl">Get in Touch</h3>
        <h4 className="bg-gradient-to-r from-[#4FC3F7] to-white bg-clip-text text-transparent font-semibold">
          Let&apos;s Work Together
        </h4>
      </div>
      <div className="flex flex-col gap-2">
        {/* name */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
          className={`px-4 py-2 rounded-md bg-transparent border ${
            errors.name ? "border-red-500" : "border-[#D6DDED]"
          } placeholder:text-[12px] focus:border-[#4FC3F7] focus:outline-none focus:ring-2 ${
            errors.name ? "focus:ring-red-500" : "focus:ring-[#4FC3F7]"
          }`}
          required
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          className={`px-4 py-2 rounded-md bg-transparent border ${
            errors.email ? "border-red-500" : "border-[#D6DDED]"
          } placeholder:text-[12px] focus:border-[#4FC3F7] focus:outline-none focus:ring-2 ${
            errors.email ? "focus:ring-red-500" : "focus:ring-[#4FC3F7]"
          }`}
          required
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      {/* service dropdown */}
      <div className="flex flex-col gap-2">
        <label htmlFor="service">Service</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`px-4 py-2 rounded-md bg-transparent border ${
            errors.service ? "border-red-500" : "border-[#D6DDED]"
          } focus:border-[#4FC3F7] focus:outline-none focus:ring-2 ${
            errors.service ? "focus:ring-red-500" : "focus:ring-[#4FC3F7]"
          }`}
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
        {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}
      </div>

      {/* textarea for message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder=""
          className="px-4 py-2 rounded-md bg-transparent border border-[#D6DDED] placeholder:text-[12px] focus:border-[#4FC3F7] focus:outline-none focus:ring-2 focus:ring-[#4FC3F7]"
          style={{ width: "100%", height: "150px" }}
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-white font-bold text-[16px] text-black rounded-md "
      >
        Get in Touch
      </button>
    </form>
  );
};

export default Contact;
