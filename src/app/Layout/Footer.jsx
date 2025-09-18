"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { subscribeEmail } from "@/app/api/subscribeEmail";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email) return toast.error("Please enter an email");
    try {
      await subscribeEmail({ email });
      setEmail("");
      setShowSuccessModal(true);
    } catch (error) {
      toast.error(error?.message || "Subscription failed");
    } finally {
      setLoading(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    router.push("/");
  };

  // 🔹 HandleEmailChange function ab sirf email state ko update karega
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // setIsFilled(value.length > 0);
  };

  return (
    <div className="bg-[#14171C] pt-[0px] md:pt-[60px] pb-9 px-[10px] sm:px-10 xl:px-[80px] container-class">
      <div className="container-class">
        <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-2 md:items-center pb-10">
          <h1 className="text-[24px] pro-normal leading-7 max-w-[320px] w-full">
            Join our newsletter to keep up to date with us!
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-2"
          >
            <div className="w-full relative">
              <Image
                src="/images/inputemail.svg"
                width={20}
                height={20}
                alt="inputemail"
                //  Yahan se conditional class hata di gayi hai
                className={`absolute top-4 left-6`}
              />
              <input
                type="email"
                name="email"
                required
                value={email}
                // Naya handler yahan use karein
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="bg-transparent border border-[#FFFFFF3D] rounded-md py-3.5 px-6 w-full md:w-[360px] flex items-center outline-none pl-12 pro-normal text-[14px] leading-5 focus:bg-transparent focus:border-[#FFFFFF3D]"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              className={`primary-btn ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>

        <div className="grid grid-cols-12 gap-8 py-10 border-y border-[#FFFFFF1F]">
          <div className="col-span-8 md:col-span-12 lg:col-span-4 xl:col-span-6 space-y-[54px]">
            <Image
              src="/images/footerlogo.png"
              width={200}
              height={58}
              alt="footerlogo"
            />
            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/vordxofficial/"
                target="_blank"
              >
                <Image
                  src="/images/facebook.png"
                  width={32}
                  height={32}
                  alt="social"
                />
              </Link>
              <Link href="https://x.com/vordxofficial" target="_blank">
                <Image
                  src="/images/twitter.png"
                  width={32}
                  height={32}
                  alt="social"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/vordxtechnologies/posts/?feedView=all"
                target="_blank"
              >
                <Image
                  src="/images/linkedin.png"
                  width={32}
                  height={32}
                  alt="social"
                />
              </Link>
              <Link href="https://www.youtube.com/" target="_blank">
                <Image
                  src="/images/youtube.png"
                  width={32}
                  height={32}
                  alt="social"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start justify-between gap-5 md:gap-[64px] col-span-6 lg:col-span-8 xl:col-span-6 max-[640px]:justify-center">
            {/* Pages Section */}
            <div>
              <h3 className="text-[16px] text-[#fff] pro-semibold leading-normal mb-5">
                Pages
              </h3>
              <ul className="space-y-[18px] font-16 pro-normal leading-normal opacity-[72%]">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/work">Case Studies</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-[16px] text-[#fff] pro-semibold leading-normal mb-5">
                Contact us
              </h3>
              <ul className="space-y-[18px] font-16 pro-normal leading-normal opacity-[72%]">
                <li>
                  {/* Click to call */}
                  <a
                    href="tel:+923240110040"
                    className="text-[16px] pro-normal leading-normal"
                  >
                    +92 324 0110040
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@vordx.com"
                    className="text-[16px] pro-normal leading-normal"
                  >
                    contact@vordx.com
                  </a>
                </li>

                <li>
                  {/* Click to visit website */}
                  <a
                    href="https://vordxtechnologies.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] pro-normal leading-normal"
                  >
                    vordx.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-[16px] text-[#fff] pro-semibold leading-normal mb-5">
                Location
              </h3>
              <ul className="space-y-[18px] font-16 pro-normal leading-normal opacity-[72%]">
                <li>
                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=145+G,+Sector+G,+Dha+Phase+1,+Lahore,+54810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] pro-normal leading-[28px]"
                  >
                    145 G, Sector G <br /> Dha Phase 1, <br /> Lahore, 54810
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row md:items-center gap-3 justify-between pt-10">
          <h1 className="opacity-80 pro-normal text-[14px] leading-normal">
            © 2025 Vordx Technologies. All rights reserved
          </h1>
          <div className="flex items-center gap-5 sm:gap-10">
            <Link
              href="/terms"
              className="opacity-80 pro-normal text-[14px] pro-normal"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="opacity-80 pro-normal text-[14px] pro-normal"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="opacity-80 pro-normal text-[14px] pro-normal"
            >
              Cookies
            </Link>
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
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-[32px] pro-medium text-white mb-2">
              Subscribed Successfully!
            </h2>
            <p className="opacity-80 mb-10 max-w-[440px]">
              Thank you for subscribing to our newsletter. You'll be the first
              to know about updates, career opportunities, and exciting news.
            </p>
            <button onClick={closeSuccessModal} className="primary-btn w-full ">
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
