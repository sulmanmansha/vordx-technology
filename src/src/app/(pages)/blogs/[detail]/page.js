import React from "react";
import Detail from "./Detail";

export const dynamic = "force-dynamic"; 

const Page = ({ params }) => {
  return (
    <div>
      <Detail slug={params.detail} />
    </div>
  );
};

export default Page;
