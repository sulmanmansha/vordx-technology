"use client";

import { contact } from "@/app/api/contact";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
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

  // --- Dropdown specific states and refs ---
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const serviceDropdownRef = useRef(null);

  const [isBudgetDropdownOpen, setIsBudgetDropdownOpen] = useState(false); // New state for budget dropdown
  const budgetDropdownRef = useRef(null); // New ref for the budget dropdown container

  const dummyServices = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Data Analytics",
  ];

  const dummyBudgets = [
    // Dummy data for budget dropdown
    "$0 $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
  ];

  // Function to handle clicking outside any dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target)
      ) {
        setIsServiceDropdownOpen(false);
      }
      if (
        budgetDropdownRef.current &&
        !budgetDropdownRef.current.contains(event.target)
      ) {
        setIsBudgetDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      service: service, // Update the service in formData
    }));
    setIsServiceDropdownOpen(false); // Close dropdown after selection
  };

  const handleServiceInputClick = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen); // Toggle dropdown visibility
    setIsBudgetDropdownOpen(false); // Close other dropdown if open
  };

  // New functions for budget dropdown
  const handleBudgetSelect = (budget) => {
    setFormData((prev) => ({
      ...prev,
      budget: budget, // Update the budget in formData
    }));
    setIsBudgetDropdownOpen(false); // Close dropdown after selection
  };

  const handleBudgetInputClick = () => {
    setIsBudgetDropdownOpen(!isBudgetDropdownOpen); // Toggle dropdown visibility
    setIsServiceDropdownOpen(false); // Close other dropdown if open
  };

  // --- End Dropdown specific states and refs ---

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
        setErrors(error.errors);
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
    <div className="flex flex-col md:flex-row md:items-center gap-10 justify-between container-class px-5 sm:px-10 lg:px-20 xl:px-[120px] py-[20px] sm:py-[76px] bg-[url('/images/contact-bg.png')] bg-cover bg-center bg-no-repeat">
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

      <div className="max-w-[591px]">
        <div className="">
          <h1 className="text-[34px] sm:text-[44px] pro-medium leading-[54px]">
            Get in Touch
          </h1>
          <p className="text-[14px] sm:text-[20px] pro-normal leading-6 tracking-[0.75px] opacity-60 max-w-[490px]">
            Have questions or need help with your order? We’re here to assist
            you every step of the way."
          </p>
        </div>

        <div className="space-y-4 sm:space-y-8 mt-10 sm:mt-[86px]">
          <div className="bg-[#1D2025] border border-[#FFFFFF14] rounded-xl flex items-center gap-3 px-5 py-6 w-full max-w-[412px] transition-shadow duration-100 hover:shadow-[0px_0px_16px_0px_rgba(255,255,255,0.12)]">
            <Image
              src="/images/contact1.png"
              width={52}
              height={52}
              alt="contactIcon"
            />
            <div className="space-y-1">
              <h1 className="text-[20px] pro-medium leading-6">Location</h1>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=145+G,+Sector+G,+Dha+Phase+1,+Lahore,+54810"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-60 text-[16px] pro-normal leading-5"
              >
                145 G, Sector G Dha Phase 1, Lahore, 54810
              </Link>
            </div>
          </div>

          <div className="bg-[#1D2025] border border-[#FFFFFF14] rounded-xl flex items-center gap-3 px-5 py-6 w-full max-w-[412px] transition-shadow duration-100 hover:shadow-[0px_0px_16px_0px_rgba(255,255,255,0.12)]">
            <Image
              src="/images/contact2.png"
              width={52}
              height={52}
              alt="contactIcon"
            />
            <div className="space-y-1">
              <h1 className="text-[20px] pro-medium leading-6">Phone Number</h1>
              <a
                href="tel:+923240110040"
                className="opacity-60 text-[16px] pro-normal leading-5"
              >
                +92 324 0110040
              </a>
            </div>
          </div>

          <div className="bg-[#1D2025] border border-[#FFFFFF14] rounded-xl flex items-center gap-3 px-5 py-6 w-full max-w-[412px] transition-shadow duration-100 hover:shadow-[0px_0px_16px_0px_rgba(255,255,255,0.12)]">
            <Image
              src="/images/contact3.png"
              width={52}
              height={52}
              alt="contactIcon"
            />
            <div className="space-y-1">
              <h1 className="text-[20px] pro-medium leading-6">Email</h1>
              <a
                href="mailto:info@vordx.com"
                className="opacity-60 text-[16px] pro-normal"
              >
                info@vordx.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side (Form) */}
      <form
        onSubmit={handleSubmit}
        className="rounded-[20px] border border-[#FFFFFF29] bg-[#17191D99] p-4 sm:p-6 md:max-w-[520px] w-full transition-shadow duration-100 hover:shadow-[0px_0px_16px_0px_rgba(255,255,255,0.16)]"
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

          {/* Service Required Dropdown - Integrated Directly */}
          <div
            className="col-span-12 sm:col-span-6 relative"
            ref={serviceDropdownRef}
          >
            <input
              type="text"
              name="service"
              placeholder="Service Required"
              className="form-input w-full pr-10 cursor-pointer"
              value={formData.service}
              onClick={handleServiceInputClick}
              readOnly
              autoComplete="off"
              required
              onPaste={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
            />
            {/* The Image for the down arrow icon */}
            <Image
              src="/images/dropdown-icon.svg"
              width={20}
              height={20}
              alt="dropdown arrow icon"
              className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-200 ${
                isServiceDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              onClick={handleServiceInputClick}
            />

            {isServiceDropdownOpen && (
              <div className="absolute z-10 w-full bg-[#16181c] rounded-md shadow-lg mt-1 max-h-60 border border-white/10">
                {dummyServices.map((service, index) => (
                  <div
                    key={index}
                    className="p-3 text-white cursor-pointer hover:bg-[#282a2e]"
                    onClick={() => handleServiceSelect(service)}
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}

            {errors?.service_required && (
              <p className="text-red-500 text-sm mt-1">
                {errors.service_required[0]}
              </p>
            )}
          </div>
          {/* End Service Required Dropdown */}

          {/* Project Budget Input - Now with Dropdown functionality */}
          <div
            className="col-span-12 sm:col-span-6 relative"
            ref={budgetDropdownRef}
          >
            <input
              type="text"
              name="budget"
              placeholder="Project Budget"
              className="form-input w-full pr-10 cursor-pointer"
              value={formData.budget}
              onClick={handleBudgetInputClick}
              readOnly
              autoComplete="off"
              required
              onPaste={(e) => e.preventDefault()}
              onCopy={(e) => e.preventDefault()}
            />
            {/* The Image for the down arrow icon */}
            <Image
              src="/images/dropdown-icon.svg"
              width={20}
              height={20}
              alt="dropdown arrow icon"
              className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-200 ${
                isBudgetDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              onClick={handleBudgetInputClick}
            />
            {isBudgetDropdownOpen && (
              <div className="absolute z-10 w-full bg-[#16181c] rounded-md shadow-lg mt-1 max-h-60 border border-white/10">
                {dummyBudgets.map((budget, index) => (
                  <div
                    key={index}
                    className="p-3 text-white cursor-pointer hover:bg-[#282a2e]"
                    onClick={() => handleBudgetSelect(budget)}
                  >
                    {budget}
                  </div>
                ))}
              </div>
            )}
            {errors?.budget && (
              <p className="text-red-500 text-sm mt-1">{errors.budget[0]}</p>
            )}
          </div>
          {/* End Project Budget Dropdown */}

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
              sitekey="6LcflXorAAAAALtU7Bw0iEKDC3D9hWkOjLLSI6LS"
              onChange={handleCaptchaChange}
            />
          </div>
        )}

        <div>
          <button
            type="submit"
            className="primary-white-btn w-fit mt-8"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
