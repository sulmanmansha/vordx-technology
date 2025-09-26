import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getServices = async () => {
  try {
    console.log("BASE_URL:", BASE_URL); // Check if BASE_URL is correct
    
    const axiosconfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await axios.get(`${BASE_URL}/service`, axiosconfig);

    return response.data;
  } catch (error) {
    console.log("error fetching service", error);
    throw error;
  }
};