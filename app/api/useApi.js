import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);
    console.log(response);
    if (!response.ok) {
      setErrorMessage(response.data.exception);
      return setError(true);
    }
    setError(false);
    setData(response.data);
  };

  return { data, error,errorMessage, loading, request };
};