"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Button = ({ href = "/", text = "Click Me", className = "" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className={`font-16 font-medium leading-5 rounded-md px-4 max-[500px]:px-3 max-[500px]:text-[11px] h-10 md:h-12 text-white flex items-center gap-2 transition-all duration-300 bg-[#3E03B3] hover:bg-white hover:text-black ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)} >
      {text}
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
  );
};

export default Button;
