import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getServiceDetail = async (id) => {
  try {
    const axiosconfig = {
        headers: {
          "Content-Type": "application/json",
        },
    };

    const response = await axios.get(`${BASE_URL}/service/${id}`, axiosconfig);

    return response.data;
  } catch (error) {
    console.log("error fetching service", error);
  }
};
