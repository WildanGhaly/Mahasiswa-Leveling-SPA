// src/components/services/productService.tsx

import API from "../api/api";

export const getProducts = async () => {
  try {
    const response = await API.get(`/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const getProductByID = async (id: string) => {
  try {
    const response = await API.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
  }
}

export const getTotalProducts = async () => {
  console.log('getTotalProducts');
  try {
    const response = await API.get(`/products/count`);
    console.log('response.data', response.data[0]);
    return response.data;
  } catch (error) {
    console.error('Error fetching total products:', error);
  }
}

export const getProductByPage = async (page: number, limit: number) => {
  console.log('getProductByPage', page, limit);
  try {
    const response = await API.get(`/products/page/${page}/limit/${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products by page:', error);
  }
}