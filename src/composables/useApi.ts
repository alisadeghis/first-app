import { useState, useCallback } from "react";

type ApiFunction<T, Args extends any[]> = (
  ...args: Args
) => Promise<{ data: T }>;

interface UseApiResult<T, Args extends any[]> {
  data: T | null;
  error: Error | null;
  loading: boolean;
  execute: (...args: Args) => Promise<T>;
}

export function useApi<T, Args extends any[]>(
  apiFunc: ApiFunction<T, Args>
): UseApiResult<T, Args> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const execute = useCallback(
    async (...args: Args) => {
      try {
        setLoading(true);
        const result = await apiFunc(...args);
        setData(result.data);
        setError(null)
        return result.data;
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("An unknown error occurred")
        );
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [apiFunc]
  );

  return { data, error, loading, execute };
}
