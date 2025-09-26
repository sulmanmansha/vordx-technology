'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import GetCase from "@/app/api/caseStudy/caseStudy"

const WorkOverflow = () => {
    const [isData, setIsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                console.log("Attempting to fetch case studies...");
                setLoading(true);
                const response = await GetCase();
                console.log("API Response:", response);
                
                if (response && Array.isArray(response)) {
                    setIsData(response);
                } else if (response && response.data && Array.isArray(response.data)) {
                    setIsData(response.data);
                } else {
                    console.warn("Response format unexpected:", response);
                    setIsData([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                toast.error("Some error occurred while fetching data");
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, []);

    console.log("Current data state:", isData);
    console.log("Loading state:", loading);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    // Split data into left and right columns
    const leftColumnData = isData.filter((_, index) => index % 2 === 0);
    const rightColumnData = isData.filter((_, index) => index % 2 === 1);

    return (
        <div className="p-5 sm:p-10 md:p-20 space-y-20 lg:space-y-[150px] container-class">
            <div className="flex items-start gap-10 lg:gap-20 max-md:flex-col max-md:items-center">
                {/* Left Column - API Data */}
                <div className="w-full md:w-1/2 group rounded-lg relative -mt-10 space-y-[60px] sm:space-y-[80px] md:space-y-[120px]">
                    {leftColumnData.map((item, index) => (
                        <div key={item.id || `left-${index}`}>
                            <Image
                                src={item.thumnail}
                                width={550}
                                height={600}
                                alt={item.title || "work"}
                                className="w-full h-auto"
                            />
                            <div className="mt-6">
                                <h3 className="text-[25px] md:text-[32px] pro-semibold leading-[30px] md:leading-[40px]">
                                    {item.title || "Project Title"}
                                </h3>
                                <p className="text-[18px] pro-normal leading-6 opacity-80 mt-2 max-w-[593px] w-full">
                                    {item.description || "Project description will be displayed here."}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column - API Data */}
                <div className="w-full md:w-1/2 rounded-lg group relative mt-20 space-y-[60px] sm:space-y-[80px] md:space-y-[120px]">
                    {rightColumnData.map((item, index) => (
                        <div key={item.id || `right-${index}`}>
                            <Image
                                src={item.thumnail}
                                width={550}
                                height={400}
                                alt={item.title || "work"}
                                className="w-full h-auto"
                            />
                            <div className="mt-6">
                                <h3 className="text-[25px] md:text-[32px] pro-semibold leading-[30px] md:leading-[40px]">
                                    {item.title || "Project Title"}
                                </h3>
                                <p className="text-[18px] pro-normal leading-6 opacity-80 mt-2 max-w-[593px]">
                                    {item.description || "Project description will be displayed here."}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Show Load More button only if there's data */}
            {isData.length > 0 && (
                <div className="flex justify-center items-center gap-2 md:gap-[18px] px-0 sm:px-0 !mt-20">
                    <button className="font-16 font-medium leading-5 rounded-md px-4 max-[500px]:px-3 max-[500px]:text-[13px] h-12 text-white flex items-center gap-2 transition-all duration-300 bg-[#3E03B3] hover:bg-white hover:text-black">
                        Load more
                    </button>
                </div>
            )}

            {/* Show message when no data */}
            {isData.length === 0 && !loading && (
                <div className="text-center py-10">
                    <p className="text-lg opacity-60">No case studies available at the moment.</p>
                </div>
            )}
        </div>
    );
};

export default WorkOverflow;