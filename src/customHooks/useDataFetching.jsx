import { useState, useEffect } from "react";

const useDataFetching = (fetchDataCallback, ...params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetchDataCallback(...params);
        setData(response);
      } catch (error) {
        console.log("error: ", error);
        setError("Failed to fetch data. Try again later");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchDataCallback, ...params]);

  return { data, loading, error };
};

export default useDataFetching;
