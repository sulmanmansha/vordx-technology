import React from "react";
import Detail from "./Detail";
import { getServices } from "../../../api/service/getServices";

export async function generateStaticParams() {
  try {
    const res = await getServices();
    const services = res?.data || [];

    return services.map((service) => ({
      detail: String(service.slug),
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

// ⬇️ make this async to await params
const Page = async ({ params }) => {
  const { detail } = await params; // ✅ fix: await params

  return (
    <div>
      <Detail slug={detail} />
    </div>
  );
};

export default Page;
