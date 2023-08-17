import { useState } from "react";

import logger from "../utility/logger";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const res = await apiFunc(...args);
    setLoading(false);

    if (!res.ok) {
      logger.log(res);
      return setError(true);
    }

    setError(false);
    setData(res.data.data);

    return res;
  };

  const refetch = (...args) => {
    setLoading(true);

    request(...args);
  };

  return {
    data,
    error,
    loading,
    refetch,
    request,
  };
};

export default useApi;
