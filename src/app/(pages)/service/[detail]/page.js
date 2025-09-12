import React from "react";
import Detail from "./Detail";

export const dynamic = "force-dynamic"; 

const Page = ({ params }) => {
  const { detail } = params; 

  return (
    <div>
      <Detail slug={detail} />
    </div>
  );
};

export default Page;
