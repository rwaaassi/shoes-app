import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://66715ab0e083e62ee43b3687.mockapi.io/shoe";
export const GetShoesData = () => {
  const [shoesData, setShoesData] = useState([]);
  const [loading, setLoading] = useState(true);
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
