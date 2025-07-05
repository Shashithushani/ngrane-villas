"use client";

import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function InquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    // Add dates to form data
    data.arrivalDate = arrivalDate;
    data.departureDate = departureDate;

    try {
      const result = await emailjs.send(
        "YOUR_SERVICE_ID", // e.g. "service_abc123"
        "YOUR_TEMPLATE_ID", // e.g. "template_xyz789"
        data,
        "YOUR_USER_ID" // public key
      );
      console.log(result.text);
      setIsSubmitted(true);
      reset();
      setArrivalDate(null);
      setDepartureDate(null);
    } catch (error) {
      console.error("Failed to send inquiry:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {isSubmitted ? (
        <div className="text-green-600 text-center">
          ✅ Your inquiry has been sent successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              {...register("fullName", { required: true })}
              className="w-full border rounded px-3 py-2"
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm">Required</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full border rounded px-3 py-2"
            />
            {errors.email && <p className="text-red-600 text-sm">Required</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Phone Number (optional)
            </label>
            <input
              type="tel"
              {...register("phone")}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-1 font-medium">Arrival Date</label>
              <DatePicker
                selected={arrivalDate}
                onChange={(date) => setArrivalDate(date)}
                className="w-full border rounded px-3 py-2"
                placeholderText="Select arrival"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium">Departure Date</label>
              <DatePicker
                selected={departureDate}
                onChange={(date) => setDepartureDate(date)}
                className="w-full border rounded px-3 py-2"
                placeholderText="Select departure"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="w-full border rounded px-3 py-2"
              rows={4}
            />
            {errors.message && <p className="text-red-600 text-sm">Required</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Send Inquiry
          </button>
        </form>
      )}
    </div>
  );
}
