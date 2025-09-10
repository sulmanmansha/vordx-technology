import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const contact = async (loginData) => {
  console.log("📤 Sending data to API:", loginData); // ✅ Must appear

  try {
    const response = await axios.post(`${API_BASE_URL}/contact-us`, loginData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
