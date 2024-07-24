import React, { useState, useEffect } from "react";

export const useUSDValue = () => {
  const [usdValue, setUsdValue] = useState(null); // Initial value indicating loading
  const [isLoading, setIsLoading] = useState(true); // Start loading initially
  const [error, setError] = useState(null);

  const apiKey = "427fd7f1ccfb074390d5";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Reset error on each fetch

      try {
        const url = `https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const json = await response.json();
        setUsdValue(json.USD_INR);
      } catch (error) {
        console.error("Error fetching conversion rate:", error.message);
        setError(error); // Set error state for handling in FinancialPage
      } finally {
        setIsLoading(false); // Set loading state to false after fetch
      }
    };

    fetchData();
  }, []); // Run effect only once on component mount

  return { usdValue, isLoading, error };
};
