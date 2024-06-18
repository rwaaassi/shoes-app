import { useState, useEffect } from "react";
import axios from "axios";

export const GetShoesData = () => {
  const [shoesData, setShoesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getShoesData = async () => {
    try {
      const response = await axios.get(
        "https://66715ab0e083e62ee43b3687.mockapi.io/shoe"
      );
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
