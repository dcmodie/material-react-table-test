import { useState, useEffect } from 'react';
const useFetchHook = (url: string) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState('defaulttt');
  useEffect(() => {
    const fetchIt = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    };

    fetchIt();
  }, [url]);

  return { data, error, isLoading };
};
export default useFetchHook;
