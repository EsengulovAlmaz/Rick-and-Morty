import React from "react";

import { API_BASE_URL } from "@/config/config";

type FetchResponse<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
  fetchData: (params?: Record<string, string>) => Promise<void>;
};

export const useFetch = <T>(url: string): FetchResponse<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchData = async (params?: Record<string, string>) => {
    setLoading(true);
    setError(null);

    const queryParams = params ? new URLSearchParams(params).toString() : "";
    const cacheKey = `${url}?${queryParams}`;

    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      setData(JSON.parse(cachedData));
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}${url}${queryParams ? `?${queryParams}` : ""}`);

      if (!response.ok) {
        throw new Error("Request error");
      }

      const data = await response.json();

      localStorage.setItem(cacheKey, JSON.stringify(data));

      setData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error has occurred");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { 
    data, 
    loading, 
    error,
    fetchData,
  };
};
