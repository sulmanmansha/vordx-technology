import Link from "next/link";
import React from "react";
import Image from "next/image";
import Button from "..//../shared/Button";

const Team = () => {
  return (
    <div className="container-class p-5 sm:p-10 md:p-20 space-y-[60px]">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[30px] md:text-[48px] pro-medium leading-10 md:leading-[60px] max-w-[763px] w-full">
          Our Creative Team
        </h1>
        <p className="text-[20px] pro-normal leading-6 pt-4 max-w-[870px] w-full">
          Meet our talented designers, dedicated to crafting innovative and
          user-friendly designs.
        </p>
      </div>

      <div className="flex flex-wrap justify-center w-full overflow-hidden group rounded-2xl">
        <Image
          src="/images/creative-team.svg"
          width={1200}
          height={600}
          alt=""
          className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="flex items-center justify-center">
      <Button href="/contact" text="Join our team" />
      </div>
    </div>
  );
};

export default Team;
