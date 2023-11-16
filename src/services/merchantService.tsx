// src/components/services/merchantService.tsx

import API from "../api/api";

export const getMerchant = async () => {
  try {
    const response = await API.get(`/merchants`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error fetching merchant:', error);
  }
};

export const getTotalMerchants = async (search: string, filter: string) => {
  console.log('getTotalMerchants');

  let api = `/merchants/count`;
  if (search) {
    api += `/search/${search}`;
  }

  if (filter) {
    api += `/filter/${filter}`;
  }

  console.log('api', api);

  try {
    const response = await API.get(api, { withCredentials: true });
    console.log('response.data', response.data[0]);
    return response.data;
  } catch (error) {
    console.error('Error fetching total merchants:', error);
  }
}

export const getMerchantByPage = async (page: number, limit: number, search: string, filter: string) => {
  console.log('getMerchantByPage', page, limit, search);
  let api = `/merchants/page/${page}/limit/${limit}`;
  if (search) {
    api += `/search/${search}`;
  }
  if (filter) {
    api += `/filter/${filter}`;
  }

  console.log('api', api);
  try {
    const response = await API.get(api, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error fetching merchant by page:', error);
  }
}