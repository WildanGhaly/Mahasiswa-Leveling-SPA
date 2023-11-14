import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getHistory = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/history`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching history:", error);
  }
};