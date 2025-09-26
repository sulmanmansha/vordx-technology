import React from "react";

const Location = () => {
  return (
    <div className="px-5 sm:px-10 md:px-20 py-[50px] container-class">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.4651871240367!2d74.39087287658712!3d31.48389494894147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67e088c74bef0395%3A0xbfee75db25b3f5e!2sVordx%20Technologies!5e0!3m2!1sen!2s!4v1751527661806!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: "20px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
