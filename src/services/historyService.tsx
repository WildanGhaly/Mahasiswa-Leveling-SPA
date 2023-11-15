import API from "../api/api";

export const getHistory = async () => {
  try {
    const response = await API.get(`/history`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching history:", error);
  }
};