import API from "../api/api";

export const getMerchant = async () => {
  try {
    const response = await API.get(`/merchants`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error fetching merchant:', error);
  }
};