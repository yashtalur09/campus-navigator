import axios from "axios"; // Import axios

const API_URL = "http://localhost:5000/api/colleges"; // Backend API endpoint

export const getCollegesByRank = async (rank) => {
    try {
        const response = await axios.get(`${API_URL}?rank=${rank}`); // Fetch data from backend
        return response.data;
    } catch (error) {
        console.error("Error fetching colleges:", error); // Log any error that occurs
        throw error;
    }
};
