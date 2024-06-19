import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://66715ab0e083e62ee43b3687.mockapi.io/shoe";
export const GetShoesData = () => {
  const [shoesData, setShoesData] = useState([]);
  const [loading, setLoading] = useState(true);
  //   fetching shoes
  const getShoesData = async () => {
    try {
      const response = await axios.get(API_URL);
      setShoesData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setShoesData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getShoesData();
  }, []);
  return { shoesData, loading };
};

// add new shoe
export const addShoe = async (newShoeData) => {
  try {
    const response = await axios.post(`${API_URL}/shoes`, newShoeData);
    return response.data;
  } catch (error) {
    console.error("Error adding shoe:", error);
    throw error;
  }
};

//   edit shoe
export const editShoe = async (shoeId, updatedShoeData) => {
  try {
    const response = await axios.put(`${API_URL}/${shoeId}`, updatedShoeData);
    return response.data;
  } catch (error) {
    console.error("Error updating shoe:", error);
    throw error;
  }
};

// delete shoe
export const deleteShoe = async (shoeId) => {
  try {
    const response = await axios.delete(`${API_URL}/${shoeId}`);
    return response.data;
  } catch (error) {
    console.log("Error deleting shoe: ", error);
  }
};
// get shoe based on id
export const getAShoe = async (id) => {
    const response = await axios.get(`${API_URL}/${shoeId}`)
}
