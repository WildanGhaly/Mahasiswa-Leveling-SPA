import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const buyProduct = async (productid: string, price: number, quantity: number) => {
    try {
        const response = await axios.post(
        `${BASE_URL}/buy`,
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