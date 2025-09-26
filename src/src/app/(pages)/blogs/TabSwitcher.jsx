"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { getBlog } from "@/app/api/blog/getBlog";

const tabLabels = ["All", "Design", "Marketing", "Developer"];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`mui-tabpanel-${index}`}
      aria-labelledby={`mui-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `mui-tab-${index}`,
    "aria-controls": `mui-tabpanel-${index}`,
  };
}

export default function BlogTabs() {
  const [value, setValue] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("📡 Fetching blogs...");
        setLoading(true);
        const response = await getBlog();
        console.log("✅ Blog API Response:", response);

        if (response?.data) {
          console.log("⛳ Blogs received:", response.data); // ADD THIS

          setBlogs(response.data);
        } else {
          setBlogs([]);
          setError("No blog data found");
        }
      } catch (err) {
        console.error("🚨 Fetch error:", err);
        setError(err?.message || "An error occurred while fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const getFilteredBlogs = (label) => {
    if (label === "All") return blogs;

    return blogs.filter((blog) => {
      if (!blog.category) return false;
      return blog.category.toLowerCase() === label.toLowerCase();
    });
  };

  return (
    <Box sx={{ width: "100%", color: "white", paddingInline: "1rem" }}>
      <Box className="flex justify-center border-none flex-wrap gap-4 mb-10">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="blog tabs"
          textColor="inherit"
          TabIndicatorProps={{ style: { display: "none" } }}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {tabLabels.map((label, index) => (
            <Tab
              key={label}
              label={label}
              {...a11yProps(index)}
              sx={{
                mr: index !== tabLabels.length - 1 ? "16px" : 0,
                color: "#FFFFFFB8",
                fontSize: "16px",
                fontWeight: 500,
                textTransform: "none",
                border: "1px solid #FFFFFF52",
                borderRadius: "6px",
                padding: "8px 20px",
                minWidth: "auto",
                "&.Mui-selected": {
                  color: "#fff",
                  backgroundColor: "#3E03B3",
                  borderRadius: "6px",
                  border: "none",
                },
              }}
            />
          ))}
        </Tabs>
      </Box>

      {tabLabels.map((label, idx) => {
        const filteredBlogs = getFilteredBlogs(label);

        return (
          <CustomTabPanel value={value} index={idx} key={label}>
            {loading ? (
              <p className="text-white text-center">Loading blogs...</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 mt-10">
                {error || filteredBlogs.length === 0 ? (
                  <div className="flex flex-col items-center justify-center col-span-full py-10">
                    <Image
                      src="/images/no-blogs-state.png"
                      alt="No blogs found"
                      width={170}
                      height={200}
                      className="mb-4"
                    />
                    <h2 className="text-white text-center pro-normal text-[24px]">
                      No Posts Available Yet
                    </h2>
                    <p className="text-white text-center pro-normal max-w-[300px]">

                      Looks like we don’t have any posts here right now. Please visit again.

                    </p>
                  </div>
                ) : (
                  filteredBlogs.map((card) => (
                    <Link
                      href={`/blogs/${card.slug}`}
                      key={card.id}
                      className="flex flex-col space-y-4"
                    >
                      <div className="w-full aspect-video relative rounded-xl overflow-hidden">
                        <Image
                          src={
                            card.image?.startsWith("http")
                              ? card.image
                              : "/images/fallback.jpg"
                          }
                          fill
                          alt={card.title}
                          className="object-cover rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <span className="business-tag w-fit">
                          {card.category || "Uncategorized"}
                        </span>
                        <h2 className="text-lg md:text-xl pro-semibold">{card.title}</h2>
                        <div className="flex items-center justify-between flex-wrap gap-y-2">
                          <div className="flex items-center gap-2.5">
                            <Image
                              src={
                                card.auther_image?.startsWith("http")
                                  ? card.auther_image
                                  : "/images/person1.svg"
                              }
                              width={40}
                              height={40}
                              alt="Author"
                              className="rounded-full"
                            />
                            <p className="text-base pro-medium">
                              {card.auther_name || "Unknown"}
                            </p>
                          </div>
                          <p className="text-base opacity-60 pro-medium">
                            {card.created_at}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}

          </CustomTabPanel>
        );
      })}
    </Box>
  );
}
