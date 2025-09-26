"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import toast from "react-hot-toast";
import { ApplyNow } from "@/app/api/career/ApplyNow";
import { useParams, useRouter } from "next/navigation";

const Form = () => {
  const params = useParams();
  const router = useRouter();
  const jobId = params?.apply;
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    current_company: "",
    role: "",
    experince: "",
    notice_period: "",
    portfolio_link: "",
    cover_letter: "",
    resume: null,
    job_id: jobId || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "resume" && value) {
        formDataToSend.append(key, value, value.name);
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await ApplyNow(formDataToSend);

      if (response.message === "Application submitted successfully") {
        setShowSuccessModal(true);
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          current_company: "",
          role: "",
          experince: "",
          notice_period: "",
          portfolio_link: "",
          cover_letter: "",
          resume: null,
          job_id: jobId || "",
        });
      } else {
        throw new Error(response.message || "Failed to submit application");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "Failed to submit your application");
    } finally {
      setLoading(false); // 🔹 stop loading
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    router.push("/career");
  };

  return (
    <div className="px-5 sm:px-20 xl:px-60 2xl:px-[320px] py-[50px] sm:py-[100px] container-class">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-12 gap-x-3 gap-y-6 w-full"
        encType="multipart/form-data"
      >
        <input
          type="text"
          placeholder="First Name"
          name="first_name"
          required
          value={formData.first_name}
          onChange={handleChange}
          className="global-input col-span-12 sm:col-span-6"
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          required
          value={formData.last_name}
          onChange={handleChange}
          className="global-input col-span-12 sm:col-span-6"
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="global-input col-span-12"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          name="phone_number"
          required
          value={formData.phone_number}
          onChange={handleChange}
          className="global-input col-span-12"
        />

        <input
          type="text"
          placeholder="Current Company"
          name="current_company"
          required
          value={formData.current_company}
          onChange={handleChange}
          className="global-input col-span-12"
        />

        <input
          type="text"
          placeholder="Role"
          name="role"
          required
          value={formData.role}
          onChange={handleChange}
          className="global-input col-span-12"
        />

        <FormControl fullWidth required className="col-span-12">
          <InputLabel
            id="experience-label"
            sx={{
              color: "#ffffff66",
              "&.Mui-focused": {
                color: "#ffffff66",
              },
            }}
          >
            Experience in Years
          </InputLabel>
          <Select
            labelId="experience-label"
            name="experince" // Note: Matches API's expected field name (even if misspelled)
            value={formData.experince}
            onChange={handleChange}
            label="Experience in Years"
            sx={{
              borderRadius: "6px",
              backgroundColor: "transparent",
              color: "white",
              fontFamily: "pro-normal",
              fontSize: "16px",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.24)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.24)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.24)",
              },
              ".MuiSelect-icon": {
                color: "#ffffff66",
              },
            }}
          >
            <MenuItem value="">Select Experience</MenuItem>
            <MenuItem value="0-1">0–1 Year</MenuItem>
            <MenuItem value="1-3">1–3 Years</MenuItem>
            <MenuItem value="3-5">3–5 Years</MenuItem>
            <MenuItem value="5+">5+ Years</MenuItem>
          </Select>
        </FormControl>

        <div className="col-span-12 border border-dashed border-gray-600 rounded-lg p-6 text-center relative">
          <label className="cursor-pointer">
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              required
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <Image
                src="/images/uploadPDF.svg"
                width={60}
                height={60}
                alt="uploadPDF"
              />
              <span className="text-white opacity-40">
                {formData.resume?.name || "Upload Resume (Required)"}
              </span>
            </div>
          </label>
        </div>

        <FormControl fullWidth required className="col-span-12">
          <InputLabel
            id="notice-label"
            sx={{
              color: "#ffffff66",
              "&.Mui-focused": {
                color: "#ffffff66",
              },
            }}
          >
            Notice Period
          </InputLabel>
          <Select
            labelId="notice-label"
            name="notice_period"
            value={formData.notice_period}
            onChange={handleChange}
            label="Notice Period"
            sx={{
              borderRadius: "6px",
              backgroundColor: "transparent",
              color: "white",
              fontFamily: "pro-normal",
              fontSize: "16px",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.24)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.24)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.24)",
              },
              ".MuiSelect-icon": {
                color: "#ffffff66",
              },
            }}
          >
            <MenuItem value="">Select Notice Period</MenuItem>
            <MenuItem value="Immediate">Immediate</MenuItem>
            <MenuItem value="15 Days">15 Days</MenuItem>
            <MenuItem value="1 Month">1 Month</MenuItem>
            <MenuItem value="2 Months">2 Months</MenuItem>
          </Select>
        </FormControl>

        <input
          type="url"
          placeholder="Portfolio Link"
          name="portfolio_link"
          value={formData.portfolio_link}
          onChange={handleChange}
          className="global-input col-span-12"
        />

        <textarea
          placeholder="Cover Letter (Required)"
          name="cover_letter"
          value={formData.cover_letter}
          onChange={handleChange}
          className="global-input col-span-12 h-32"
          required
        ></textarea>

        {/* Hidden job_id field */}
        <input type="hidden" name="job_id" value={jobId} />

        <button
          type="submit"
          className={`col-span-12 primary-btn ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={loading} // 🔹 disable button
        >
          {loading ? "Submitting Application..." : "Apply"}
        </button>
      </form>

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="bg-[#272829] rounded-[20px] px-6 py-8 max-w-xl w-full text-center flex flex-col items-center justify-center">
            <div className="flex justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <path
                  d="M60.8696 58.4437V67.8261C60.8696 70.1272 58.9968 72 56.6957 72H18.8522C16.5511 72 14.6783 70.1272 14.6783 67.8261V67.5478H12.1739C9.87281 67.5478 8 65.675 8 63.3739V19.9652C8 19.7435 8.08804 19.5316 8.24454 19.375L19.375 8.24454C19.5315 8.08804 19.7435 8 19.9652 8H50.0174C52.3185 8 54.1913 9.87281 54.1913 12.1739V12.4522H56.6957C58.9968 12.4522 60.8696 14.325 60.8696 16.6261V21.5563C67.4813 25.0618 72 32.0095 72 40C72 47.9905 67.4813 54.9382 60.8696 58.4437ZM54.1913 14.1217V19.3808C55.9378 19.6392 57.6215 20.0919 59.2 20.7561V16.6261C59.2 15.2457 58.076 14.1217 56.6957 14.1217H54.1913ZM10.8499 19.1304H17.7391C18.5066 19.1304 19.1304 18.5066 19.1304 17.7391V10.8499L10.8499 19.1304ZM12.1739 65.8783H50.0174C51.3978 65.8783 52.5217 64.7543 52.5217 63.3739V60.799C52.0598 60.8297 51.6 60.8696 51.1304 60.8696C45.6724 60.8696 40.7127 58.7465 36.99 55.3043H16.6261C16.1652 55.3043 15.7913 54.9305 15.7913 54.4696C15.7913 54.0087 16.1652 53.6348 16.6261 53.6348H35.3664C34.0678 52.1354 32.9829 50.4519 32.1497 48.6261H16.6261C16.1652 48.6261 15.7913 48.2522 15.7913 47.7913C15.7913 47.3304 16.1652 46.9565 16.6261 46.9565H31.4784C30.9127 45.3638 30.5219 43.6905 30.3596 41.9478H16.6261C16.1652 41.9478 15.7913 41.574 15.7913 41.113C15.7913 40.6521 16.1652 40.2783 16.6261 40.2783H30.275C30.2738 40.1847 30.2609 40.0939 30.2609 40C30.2609 38.371 30.4673 36.7922 30.8222 35.2696H16.6261C16.1652 35.2696 15.7913 34.8957 15.7913 34.4348C15.7913 33.9739 16.1652 33.6 16.6261 33.6H31.2743C31.8519 31.8127 32.6658 30.1328 33.6768 28.5913H16.6261C16.1652 28.5913 15.7913 28.2174 15.7913 27.7565C15.7913 27.2956 16.1652 26.9217 16.6261 26.9217H34.8909C38.7197 22.1768 44.5727 19.1304 51.1304 19.1304C51.6 19.1304 52.0598 19.1703 52.5217 19.201V12.1739C52.5217 10.7935 51.3978 9.66957 50.0174 9.66957H20.8V17.7391C20.8 19.4272 19.4272 20.8 17.7391 20.8H9.66957V63.3739C9.66957 64.7543 10.7935 65.8783 12.1739 65.8783ZM59.2 59.2439C57.6215 59.9082 55.9378 60.3608 54.1913 60.6192V63.3739C54.1913 65.675 52.3185 67.5478 50.0174 67.5478H16.3478V67.8261C16.3478 69.2065 17.4718 70.3304 18.8522 70.3304H56.6957C58.076 70.3304 59.2 69.2065 59.2 67.8261V59.2439ZM70.3304 40C70.3304 29.4131 61.7174 20.8 51.1304 20.8C40.5435 20.8 31.9304 29.4131 31.9304 40C31.9304 50.5869 40.5435 59.2 51.1304 59.2C61.7174 59.2 70.3304 50.5869 70.3304 40Z"
                  fill="#A1F919"
                />
                <path
                  d="M59.6453 34.7131L48.96 45.3984L43.6174 40.0557"
                  stroke="#A1F919"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-[32px] pro-medium text-white mb-2">
              Application Submitted Successfully!
            </h2>
            <p className="opacity-80 mb-10 max-w-[440px]">
              Thank you for applying. We'll review your application and get back
              to you soon.
            </p>
            <button onClick={closeSuccessModal} className="primary-btn w-full ">
              Back to Careers
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
