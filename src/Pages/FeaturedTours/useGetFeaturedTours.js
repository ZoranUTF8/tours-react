import axios from "axios";
import { useEffect, useState } from "react";

//! Here we have,
//! Extracted logic that was present in the FeaturedTours component into a hook.
//! This hook will return an object that contains the isLoading, posts, and error values.

export default function useGetFeaturedTours() {
  const [topTours, setTourTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios(
        "https://trips-api.onrender.com/api/v1/tours/top-5-tours"
      );

     
      const {
        data: {
          data: { docs: tours },
        },
      } = response;

      setTourTours(tours);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    topTours,
    error,
  };
}
