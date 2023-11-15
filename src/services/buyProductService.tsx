// src/components/services/buyProductService.tsx

import API from "../api/api";

export const buyProduct = async (productid: string, price: number, quantity: number) => {
    try {
        const response = await API.post(
        `/buy`,
        {
            productid,
            quantity,
            price,
        },
        {
            withCredentials: true,
        }
        );
        return response.data.success;
    } catch (error) {
        console.error("Error buying product:", error);
    }
};