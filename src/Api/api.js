// api.js
import axios from "axios";

const BASE_URL = "http://localhost:3000"; // Replace with your API base URL

export const fetchProductsFromApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getProducts`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/getProduct/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchResults = async (searchQuery) =>{
  try {
    const response = await axios.get(`${BASE_URL}/searchProduct/${searchQuery}`)
    return response.data

  } catch (error) {
    throw error;
  }
}