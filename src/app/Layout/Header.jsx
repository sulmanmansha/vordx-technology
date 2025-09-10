"use client";

import { useEffect, useState, useRef } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import useSWR from "swr";

import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { getJobs } from "../api/career/getJobs";
import { getServices } from "../api/service/getServices";

const megaMenuItems = [
  { id: 1, icon: "/images/menuIcon1.svg", title: "UI/UX Design" },
  { id: 2, icon: "/images/menuIcon2.svg", title: "Mobile App Development" },
  { id: 3, icon: "/images/menuIcon3.svg", title: "Custom Software Solutions" },
  { id: 4, icon: "/images/menuIcon4.svg", title: "Dedicated Development Team" },
  { id: 5, icon: "/images/menuIcon5.svg", title: "Front-End Development" },
  { id: 6, icon: "/images/menuIcon6.svg", title: "Back-End & API Development" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);
  const [service, setService] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  // Refs for detecting clicks outside
  const megaMenuRef = useRef(null);
  const servicesButtonRef = useRef(null);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(event.target)
      ) {
        setMegaOpen(false);
      }
    };

    if (megaOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [megaOpen]);

  const fetchServices = async () => {
    try {
      const res = await getServices();
      setLoading(true);
      if (res.data && Array.isArray(res.data)) {
        setService(res.data);
      } else {
        setService([]);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
      setService([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const fetcher = async () => {
    const res = await getJobs();
    return res?.data || [];
  };

  const {
    data: jobs = [],
    isLoading,
    error,
  } = useSWR("career-jobs", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const hasJobs = jobs?.length > 0 && !isLoading && !error;

  return (
    <header className="bg-transparent relative z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between py-[23px] px-5 sm:px-10"
      >
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 ">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white lg:hidden"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <Link href="/" className="-m-1.5 p-1.5 block sm:hidden">
            <Image
              src="/images/burger-icon.svg"
              width={61}
              height={18}
              alt="logo"
            />
          </Link>
        </div>

        {/* Logo */}
        <div className="hidden sm:flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image src="/images/footerlogo.png" width={163} height={48} alt="logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div
          ref={megaMenuRef}
          className="hidden lg:flex lg:gap-x-8 bg-[#FFFFFF0F] backdrop-blur-[17.5px] shadow-[inset_0_0_6px_0_rgba(255,255,255,0.12)] rounded-xl px-5 py-3 items-center relative"
        >
          <button
            ref={servicesButtonRef}
            onClick={() => setMegaOpen(!megaOpen)}
            className={`text-[14px] pro-medium leading-5 transition-colors duration-300
              ${
                pathname.startsWith("/service")
                  ? "text-[#9aee1a]"
                  : "text-white hover:text-[#9aee1a]"
              }
            `}
          >
            Services
          </button>

          {/* Work Link */}
          <Link
            href="/work"
            className={`text-[14px] pro-medium leading-5 transition-colors duration-300
              ${pathname === "/work" ? "text-[#9aee1a]" : "text-white hover:text-[#9aee1a]"}
            `}
          >
            Work
          </Link>

          {/* Industries Link */}
          <Link
            href="/industry"
            className={`text-[14px] pro-medium leading-5 transition-colors duration-300
              ${pathname === "/industry" ? "text-[#9aee1a]" : "text-white hover:text-[#9aee1a]"}
            `}
          >
            Industries
          </Link>

          {/* About Link */}
          <Link
            href="/about"
            className={`text-[14px] pro-medium leading-5 transition-colors duration-300
              ${pathname === "/about" ? "text-[#9aee1a]" : "text-white hover:text-[#9aee1a]"}
            `}
          >
            About
          </Link>

          {/* Careers Link with Hiring Badge */}
          <div className="flex items-center gap-2">
            <Link
              href="/career"
              className={`text-[14px] pro-medium leading-5 transition-colors duration-300
                ${pathname === "/career" ? "text-[#9aee1a]" : "text-white hover:text-[#9aee1a]"}
              `}
            >
              Careers
            </Link>
            {hasJobs && (
              <span className="text-[12px] bg-[#CCFFBC] px-2 py-1 rounded-full text-[#42923A] pro-normal leading-5 whitespace-nowrap">
                Hiring!
              </span>
            )}
          </div>

          {/* Mega Menu Desktop */}
          {megaOpen && (
            <div
              ref={megaMenuRef}
              className="absolute top-full left-0 mt-2 bg-[#272829] rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 p-6 w-[806px] shadow-xl z-50"
            >
              {service.length === 0 && !loading ? (
                <p className="text-white">Services Not found</p>
              ) : loading ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-[#FFFFFF0A] rounded-lg p-4 animate-pulse"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#3E3E3E]"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-6 w-3/4 bg-[#3E3E3E] rounded"></div>
                        <div className="h-4 w-full bg-[#3E3E3E] rounded"></div>
                        <div className="h-4 w-5/6 bg-[#3E3E3E] rounded"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                service.map((item) => (
                  <Link
                    key={item.id}
                    href={`/service/${item.slug}`}
                    className="bg-[#FFFFFF0A] rounded-lg p-4 hover:bg-[#3E3E3E] transition"
                    onClick={() => setMegaOpen(false)}
                  >
                    <div className="flex items-start gap-3">
                      <Image
                        src={item.icon || "/images/menuIcon1.svg"}
                        alt={item.title}
                        width={24}
                        height={24}
                      />
                      <div className="flex flex-col gap-1">
                        <h4 className="text-white text-[20px] leading-6 pro-normal">
                          {item.title}
                        </h4>
                        <p className="text-[16px] leading-5 pro-normal line-clamp-2">
                          {item.short_description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="text-[16px] font-medium leading-5 flex items-center transition-all duration-300
              bg-[#3E03B3] hover:bg-white hover:text-black
              rounded-[6px]
              h-[32px] pt-[8px] pb-[8px] pl-[12px] pr-[12px] gap-[4px]
              lg:h-[48px] lg:pt-[14px] lg:pb-[14px] lg:pl-[24px] lg:pr-[24px] lg:gap-[8px]
              text-white"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Book to Call
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              animate={{ rotate: hovered ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                d="M5.78436 5.28595L5.78436 6.94766L12.3663 6.95355L5.1951 14.1248L6.37361 15.3033L13.5449 8.13206L13.5507 14.714L15.2124 14.714V5.28595H5.78436Z"
                fill={hovered ? "#000" : "#fff"}
              />
            </motion.svg>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dialog - This part remains unchanged */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full h-fit overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image src="/images/footerlogo.png" width={80} height={40} alt="logo" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="mt-6">
            <div className="space-y-4">
              {/* Services with submenu */}
              <button
                className="w-full flex justify-between items-center text-white text-base font-medium px-3 py-2"
                onClick={() => setMobileMegaOpen(!mobileMegaOpen)}
              >
                Services
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${
                    mobileMegaOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileMegaOpen && (
                <div className="ml-4 space-y-3">
                  {megaMenuItems.map((item) => (
                    <Link
                      key={item.id}
                      href={`/service/${item.id}`}
                      className="flex items-center gap-2 text-white text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Image
                        src={item.icon}
                        width={20}
                        height={20}
                        alt={item.title}
                      />
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}

              {/* Other links */}
              <Link
                href="/work"
                className="block text-white text-base px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/industry"
                className="block text-white text-base px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="/about"
                className="block text-white text-base px-3 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex items-center gap-2 px-3 py-2">
                <Link
                  href="/career"
                  className="text-white text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                {hasJobs && (
                  <span className="text-[12px] bg-[#CCFFBC] px-2 py-1 rounded-full text-[#42923A] pro-normal leading-5">
                    Hiring!
                  </span>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}