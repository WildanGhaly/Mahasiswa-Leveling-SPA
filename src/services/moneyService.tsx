// src/services/moneyService.tsx

import API from "../api/api";

export const getMoney = async () => {
  try {
    const response = await API.get(`/money`, { withCredentials: true });
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching money:', error);
  }
};