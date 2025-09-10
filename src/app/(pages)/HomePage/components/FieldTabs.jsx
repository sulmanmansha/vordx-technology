"use client";

import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import UI from "./TabContent/UI";
import Frontend from "./TabContent/Frontend";
import Backend from "./TabContent/Backend";
import FullStack from "./TabContent/FullStack";
import Mobile from "./TabContent/Mobile";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-flexContainer": {
    display: "flex",
    marginTop: "16px",
    gap: "12px",
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiTabs-flexContainer": {
      overflowX: "auto",
      gap: "8px",
      scrollbarWidth: "none", // Firefox
      "&::-webkit-scrollbar": {
        display: "none", // Chrome, Safari, Edge
      },
    },
  },
}));

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontFamily: "pro-normal",
    textTransform: "none",
    fontSize: "16px",
    fontWeight: 400,
    color: "#FFFFFF99",

    padding: "8px 16px !important", // enforce padding
    minHeight: "unset", // remove MUI's default
    minWidth: "unset", // remove MUI's default
    borderRadius: "9999px",
    transition: "all 0.3s ease",
    "&.Mui-selected": {
      backgroundColor: "#fff",
      color: "#000",
    },
    "&:hover": {
      backgroundColor: "#FFFFFF22",
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      padding: "6px 12px !important",
    },
  })
);

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      className="w-full"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box className="pt-10 w-full">{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function FieldTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="py-6 md:py-10 px-2.5 sm:px-10 lg:px-[44px] flex flex-col justify-center items-center text-center container-class">
      <div>
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] pro-medium leading-10 sm:leading-[50px] md:leading-[60px] max-w-[763px] w-full">
          Building digital experiences that inspire and deliver results
        </h1>
        <p className="text-[18px] pro-normal leading-6 opacity-80 pt-4">
          Explore our success stories & discover how we’ve helped businesses
          like yours overcome challenges
        </p>
      </div>

      {/* Tabs */}
      <Box className="pt-4 flex justify-center w-full">
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="custom styled tabs"
          orientation="horizontal"
        >
          <StyledTab label="UI & UX" />
          <StyledTab label="Front-end" />
          <StyledTab label="Back-end" />
          <StyledTab label="Full stack" />
          <StyledTab label="Mobile app" />
        </StyledTabs>
      </Box>

      {/* Tab Panels */}
      <CustomTabPanel value={value} index={0}>
        <UI />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Frontend />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Backend />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <FullStack />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Mobile />
      </CustomTabPanel>
    </div>
  );
}