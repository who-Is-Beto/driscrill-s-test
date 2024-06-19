import { BASEURL } from "@/constants";
import { useEffect, useState } from "react";

type UseQuery = {
  data: null | Record<string, unknown>;
  error: null | unknown;
  loading: boolean;
};

export const useQuery = (endpoint: string, options?: RequestInit) => {
  const [state, setState] = useState<UseQuery>({
    data: null,
    error: null,
    loading: true
  });

  useEffect((): void => {
    fetch(`${BASEURL}/${endpoint}`)
      .then((response) => response.json())
      .then((data) => setState({ data, error: null, loading: false }))
      .catch((err) =>
        setState({
          data: null,
          error: err,
          loading: false
        })
      );
  }, []);
  return state;
};
