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

        if (response) {
          setBlogs(response.data);
        } else {
          console.error("❌ Blog API Error:", response.message);
          setError(response.message || "Failed to fetch blogs");
        }
      } catch (err) {
        console.error("🚨 Fetch error:", err);
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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
        {/* Gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#3E03B340] via-[#A1F91940] to-[#3E03B340] z-0 max-h-24 h-full w-full filter blur-[24px]" />

        {/* Navbar */}
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

        {/* Responsive grid container */}
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
                  placeholder="Please enter your businesss email"
                />
                <div className="pt-3 sm:pt-4">
                  <button
                    type="submit"
                    className={`primary-btn ${
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
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
