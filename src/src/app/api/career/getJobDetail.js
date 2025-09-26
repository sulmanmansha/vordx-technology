import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getJobDetail = async (id) => {
  try {
    const axiosconfig = {
        headers: {
          "Content-Type": "application/json",
        },
    };

    const response = await axios.get(`${BASE_URL}/career/detail/${id}`, axiosconfig);

    return response.data;
  } catch (error) {
    console.log("error fetching job detail", error);
  }
};
