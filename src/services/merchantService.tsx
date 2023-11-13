import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getMerchant = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/merchants`);
    return response.data;
  } catch (error) {
    console.error('Error fetching merchant:', error);
  }
};