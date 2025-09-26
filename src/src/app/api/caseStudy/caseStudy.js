import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const GetCase = async () => {
    try {
        // Debug: Log the API URL being used
        console.log("API_BASE_URL:", API_BASE_URL);
        
        if (!API_BASE_URL) {
            throw new Error("NEXT_PUBLIC_BASE_URL environment variable is not set");
        }


        const response = await axios.get(`${API_BASE_URL}/case-study`, {
            headers: {
                "Content-Type": "application/json",
            },
           
        });

        console.log("API Response status:", response.status);
        console.log("API Response data:", response.data);

        return response.data;
    } catch (error) {
        console.error("API Error Details:");
        console.error("Error message:", error.message);
        console.error("Error response:", error.response?.data);
        console.error("Error status:", error.response?.status);
        console.error("Full error:", error);
        
        throw error;
    }
};

export default GetCase;