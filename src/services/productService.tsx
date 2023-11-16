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

export const getTotalProducts = async (search: string) => {
  console.log('getTotalProducts');

  let api = `/products/count`;
  if (search) {
    api += `/search/${search}`;
  }

  try {
    const response = await API.get(api);
    console.log('response.data', response.data[0]);
    return response.data;
  } catch (error) {
    console.error('Error fetching total products:', error);
  }
}

export const getProductByPage = async (page: number, limit: number, search: string) => {
  console.log('getProductByPage', page, limit, search);
  let api = `/products/page/${page}/limit/${limit}`;
  if (search) {
    api += `/search/${search}`;
  }
  try {
    const response = await API.get(api);
    return response.data;
  } catch (error) {
    console.error('Error fetching products by page:', error);
  }
}

export const getProductWithSearch = async (search: string) => {
  console.log('getProductWithSearch', search);
  try {
    const response = await API.get(`/products/search/${search}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products with search:', error);
  }
}