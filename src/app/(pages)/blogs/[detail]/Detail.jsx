"use client";

import Navbar from "@/app/Layout/Header";
import LeftDetail from "./LeftDetail";
import RelatedInsights from "./RelatedInsights";
import { getBlogDetail } from "../../../api/blog/getBlogDetail";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { subscribeEmail } from "@/app/api/subscribeEmail";

const Detail = ({ slug }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("📡 Fetching blogs...");
        setLoading(true);
        const response = await getBlogDetail(slug);
        console.log("✅ Blog API Response:", response);

        if (response && response.data) {
          setBlogs(response.data);
        } else {
          console.error("❌ Blog API Error:", response?.message || "No data");
          setError(response?.message || "Failed to fetch blogs");
        }
      } catch (err) {
        console.error("🚨 Fetch error:", err);
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [slug]); // ✅ dependency fixed here

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await subscribeEmail({ email });
      setEmail("");
      setShowSuccessModal(true);
    } catch (error) {
      toast.error(error?.message || "Subscription failed");
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div>
      <div className="pb-[30px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-[#3E03B340] via-[#A1F91940] to-[#3E03B340] z-0 max-h-24 h-full w-full filter blur-[24px]" />
        <Navbar />
        <div className="absolute -right-72 top-[35%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>
        <div className="absolute -left-72 bottom-[5%] animate-ellipse">
          <div className="ellipse-container blur-[150px] opacity-30">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>

        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 py-8 md:py-12 lg:py-[60px] xl:py-[100px] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-20 container mx-auto">
          <div className="lg:col-span-7 xl:col-span-8">
            <LeftDetail blogs={blogs} />
          </div>
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="p-6 sm:p-8 rounded-[20px] border border-[#E4E4E11F] bg-[#FFFFFF05] shadow-[0_0_20px_0_rgba(255,255,255,0.16)]">
              <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] pro-semibold leading-tight md:leading-[48px] pb-3">
                Stay Updated with Weekly Insights
              </h1>
              <p className="text-sm sm:text-base md:text-[16px] leading-5 md:leading-6 pro-medium pb-4 sm:pb-5 md:pb-[30px]">
                Our expert-curated newsletter brings you the latest trends and
                must-know updates.
              </p>
              <form onSubmit={handleSubmit} className="space-y-2">
                <label
                  htmlFor="business"
                  className="text-sm sm:text-base md:text-[16px] leading-5 pro-medium"
                >
                  Business Email*
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input w-full py-2 px-3 text-sm sm:text-base"
                  name="email"
                  placeholder="Please enter your business email"
                />
                <div className="pt-3 sm:pt-4">
                  <button
                    type="submit"
                    className={`primary-btn ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                    disabled={loading}
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
            <div className="bg-[#272829] rounded-[20px] px-6 py-8 max-w-xl w-full text-center flex flex-col items-center justify-center">
              <div className="flex justify-center mb-6">
                {/* SVG success icon here */}
              </div>
              <h2 className="text-[32px] pro-medium text-white mb-2">
                You're Subscribed!
              </h2>
              <p className="opacity-80 mb-10 max-w-[440px]">
                Thanks for signing up! You’ll now receive our latest news, tips,
                and updates straight to your inbox.
              </p>
              <button
                onClick={closeSuccessModal}
                className="primary-btn w-full"
              >
                Back to Blog
              </button>
            </div>
          </div>
        )}

        <div>
          <RelatedInsights />
        </div>
      </div>
    </div>
  );
};

export default Detail;
