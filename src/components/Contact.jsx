import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    toast.success("Message sent successfully ✅");
    reset(); // clear form after submit
  };

  return (
    <div className="w-[90vw] md:w-[60vw] m-auto mt-10 p-6 shadow-md rounded-xl bg-white">
      <h2 className="text-2xl font-bold text-center mb-5 border-b-4 border-blue-600 inline-block">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border rounded-lg"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col space-y-2">
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="p-2 border rounded-lg"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Enter a valid phone number",
              },
            })}
          />
          {errors.phone && (
            <span className="text-red-600">{errors.phone.message}</span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col space-y-2">
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-2 border rounded-lg"
            {...register("message", { required: "Message cannot be empty" })}
          ></textarea>
          {errors.message && (
            <span className="text-red-600">{errors.message.message}</span>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
