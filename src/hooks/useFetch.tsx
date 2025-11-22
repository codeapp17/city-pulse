import { useEffect, useState, useCallback, useMemo } from "react";

type FetchOptions = RequestInit & {
  autoFetch?: boolean;
  params?: Record<string, any>;
};

function useFetch<T = any>(endPoint: string, options: FetchOptions = {}) {
  const BASE_URL = process.env.EXPO_PUBLIC_API_URL || "";
  const API_KEY = process.env.EXPO_PUBLIC_EVENTS_KEY || "";
  const {
    autoFetch = true,
    params = {},
    ...fetchOptions
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(autoFetch);
  const [error, setError] = useState<string | null>(null);

  const mergedParams = useMemo(() => {
    return {
      apikey: API_KEY,   // default param
      ...params          // user params override if needed
    };
  }, [API_KEY, JSON.stringify(params)]);

  const queryString = useMemo(() => {
    const qs = new URLSearchParams(
      Object.entries(mergedParams).reduce((acc, [key, value]) => {
        if (value !== undefined && value !== null && value !== "")
          acc[key] = String(value);
        return acc;
      }, {} as Record<string, string>)
    ).toString();
    return qs ? `?${qs}` : "";
  }, [JSON.stringify(mergedParams)]);

  const fullUrl = BASE_URL + endPoint + (queryString ? `${queryString}` : "");

  const fetchData = useCallback(async () => {
    if (!fullUrl) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(fullUrl, fetchOptions);
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const result = await res.json();
      setData(result);
    } catch (err: any) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [fullUrl, JSON.stringify(fetchOptions)]);

  // Auto fetch on mount or dependency change
  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [autoFetch]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetch;
