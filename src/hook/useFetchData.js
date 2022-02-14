import { useEffect, useState } from "react";

export default function useFetchData(fetchPromise) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPromise
      .then((dt) => {
        setData(dt);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [loading, data, error];
}
