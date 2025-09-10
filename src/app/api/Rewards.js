// app/api/Rewards.ts
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const Rewards = async (sliderType) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/slider`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          type: sliderType,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("error fetching Rewards", error);
  }
};
