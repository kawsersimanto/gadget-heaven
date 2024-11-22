import { useState, useEffect } from "react";

const useFetch = (url, initialState) => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (url) fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
