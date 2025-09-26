import React from "react";
import Detail from "./Detail";

export const dynamic = "force-dynamic"; // ✅ force dynamic rendering

const Page = ({ params }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Right animation */}
      <div className="absolute -right-72 top-[25%] animate-ellipse">
        <div className="ellipse-container blur-[150px] opacity-30">
          <div className="ellipse blue"></div>
          <div className="ellipse green"></div>
        </div>
      </div>

      {/* Detail component */}
      <Detail slug={params.detail} />

      {/* Left animation */}
      <div className="absolute -left-72 top-[55%] animate-ellipse">
        <div className="ellipse-container blur-[150px] opacity-30">
          <div className="ellipse blue"></div>
          <div className="ellipse green"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
