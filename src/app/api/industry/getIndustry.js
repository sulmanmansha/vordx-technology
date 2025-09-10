import axios from "axios";
const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const GetIndustry = async ()=>{
    try {
        const response = await axios.get(
            `${API_BASE_URL}/industries`,
            {
                headers:{
                    'Content-Type' : 'application/json'
                },
            }
        )
       return response.data
    } catch (error) {
        console.error("The server is saying : ", error.message)
        throw error
    }
}
