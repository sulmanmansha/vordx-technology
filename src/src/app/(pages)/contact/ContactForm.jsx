// Updated ContactForm component with modal popups instead of toast
"use client";

import { contact } from "@/app/api/contact";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    open: false,
    type: "success",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const honeypot = e.target.phone_confirm?.value;
    if (honeypot) {
      setModal({
        open: true,
        type: "error",
        message: "Bot detected. Submission blocked.",
      });
      return;
    }
    setShowCaptcha(true);
  };

  const handleCaptchaChange = async (token) => {
    if (!token) return;
    setCaptchaToken(token);
    setLoading(true);

    const payload = {
      name: formData.fullName,
      company_name: formData.companyName,
      email: formData.email,
      service_required: formData.service,
      budget: formData.budget,
      description: formData.message,
      recaptcha_token: token,
    };

    try {
      const response = await contact(payload);
      if (response?.message === "Form submitted successfully.") {
        setModal({
          open: true,
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          service: "",
          budget: "",
          message: "",
        });
        setCaptchaToken(null);
        setShowCaptcha(false);
      } else {
        setModal({
          open: true,
          type: "error",
          message: "Submission failed. Please try again.",
        });
      }
    } catch (error) {
      if (error?.errors) {
        setErrors(error.errors); // store backend validation errors
      } else {
        setModal({
          isOpen: true,
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } finally {
      setLoading(false);
      setShowCaptcha(false);
    }
  };

  const closeModal = () => setModal({ ...modal, open: false });

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-10 justify-between container-class px-5 sm:px-10 lg:px-20 xl:px-[120px] py-[76px]">
      {/* Left Content (Contact Info) */}

      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#272829] text-white p-8 rounded-[20px] max-w-[560px] w-full text-center flex flex-col items-center justify-center">
            <Image
              src={
                modal.type === "success"
                  ? "/images/successIcon.svg"
                  : "/images/failIcon.svg"
              }
              width={80}
              height={80}
              alt="status-icon"
            />
            <h2 className="text-[32px] pro-semibold leading-10 pb-2 pt-8">
              {modal.type === "success"
                ? "Message Sent Successfully!"
                : "Unable to Send Message"}
            </h2>
            <p className="opacity-80 text-[19px] leading-6 pro-normal pb-10">
              {modal.message}
            </p>
            <button onClick={closeModal} className="primary-btn w-full">
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-[591px] space-y-5 sm:space-y-10">
        <div className="space-y-[20px]">
          <h1 className="text-[34px] sm:text-[44px] pro-bold leading-[54px]">
            Get in Touch
          </h1>
          <p className="text-[14px] sm:text-[18px] pro-normal leading-5 tracking-[0.75px] opacity-60 max-w-[490px] w-full">
            Have questions or need help with your order? We’re here to assist
            you every step of the way.
          </p>
        </div>

        <div className="space-y-8">
          {/* Email */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/contact2.png"
              width={52}
              height={52}
              alt="email"
            />
            <div>
              <h1 className="text-[20px] pro-medium">Email</h1>
              <a
                href="mailto:info@vordx.com"
                className="opacity-60 text-[16px] pro-normal"
              >
                info@vordx.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/contact1.png"
              width={52}
              height={52}
              alt="phone"
            />
            <div>
              <h1 className="text-[20px] pro-medium">Phone Number</h1>
              <a
                href="tel:+923240110040"
                className="opacity-60 text-[16px] pro-normal"
              >
                +92 300 7336679
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/contact1.png"
              width={52}
              height={52}
              alt="location"
            />
            <div>
              <h1 className="text-[20px] pro-medium">Location</h1>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=145+G,+Sector+G,+Dha+Phase+1,+Lahore,+54810"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 text-[16px] pro-normal"
              >
                145 G, Sector G Dha Phase 1, Lahore, 54810
              </Link>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-[#FFFFFF14] pt-10 flex gap-3">
          <Link href="https://www.facebook.com/vordxofficial" target="_blank">
            <Image src="/images/FB.svg" width={50} height={50} alt="FB" />
          </Link>
          <Link
            href="https://www.instagram.com/vordxtechnologies"
            target="_blank"
          >
            <Image src="/images/IN.svg" width={50} height={50} alt="IG" />
          </Link>
          <Link href="https://x.com/vordxofficial" target="_blank">
            <Image src="/images/TW.svg" width={50} height={50} alt="X" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/vordxtechnologies"
            target="_blank"
          >
            <Image src="/images/LD.svg" width={50} height={50} alt="LI" />
          </Link>
        </div>
      </div>

      {/* Form Side */}
      <form
        onSubmit={handleSubmit}
        className="rounded-[20px] border border-[#FFFFFF29] bg-[#17191D99] shadow-[0_0_16px_0_rgba(255,255,255,0.12)] p-4 sm:p-6 md:max-w-[520px] w-full"
      >
        <h1 className="text-[24px] pro-semibold leading-8 pb-8">
          Have a Question? Let Us Know
        </h1>

        {/* Honeypot Field */}
        <input
          type="text"
          name="phone_confirm"
          className="hidden"
          autoComplete="off"
        />

        <div className="grid grid-cols-12 gap-y-6 gap-x-3">
          <div className="col-span-12">
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              className="form-input w-full"
              onChange={handleChange}
              value={formData.fullName}
              autoComplete="off"
              required
              onPaste={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
            />
            {errors?.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>
            )}
          </div>

          <div className="col-span-12 sm:col-span-6">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="form-input w-full"
              onChange={handleChange}
              value={formData.companyName}
              autoComplete="off"
              required
              onPaste={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
            />
            {errors?.company_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.company_name[0]}
              </p>
            )}
          </div>

          <div className="col-span-12 sm:col-span-6">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="form-input w-full"
              onChange={handleChange}
              value={formData.email}
              autoComplete="off"
              required
              onPaste={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
            />
            {errors?.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
            )}
          </div>

          <div className="col-span-12 sm:col-span-6">
            <input
              type="text"
              name="service"
              placeholder="Service Required"
              className="form-input w-full"
              onChange={handleChange}
              value={formData.service}
              autoComplete="off"
              required
              onPaste={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
            />
            {errors?.service_required && (
              <p className="text-red-500 text-sm mt-1">
                {errors.service_required[0]}
              </p>
            )}
          </div>

          <div className="col-span-12 sm:col-span-6">
            <input
              type="text"
              name="budget"
              placeholder="Enter Budget"
              className="form-input w-full"
              onChange={handleChange}
              value={formData.budget}
              autoComplete="off"
              required
              onPaste={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
            />
            {errors?.budget && (
              <p className="text-red-500 text-sm mt-1">{errors.budget[0]}</p>
            )}
          </div>

          <div className="col-span-12">
            <textarea
              name="message"
              placeholder="Message..."
              className="form-input w-full h-[148px]"
              onChange={handleChange}
              value={formData.message}
              autoComplete="off"
              required
              onPaste={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
            ></textarea>
            {errors?.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description[0]}
              </p>
            )}
          </div>
        </div>

        {showCaptcha && (
          <div className="mt-6">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTUE_KEY}
              onChange={handleCaptchaChange}
            />
          </div>
        )}

        <div>
          <button
            type="submit"
            className="primary-btn w-fit mt-8"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;