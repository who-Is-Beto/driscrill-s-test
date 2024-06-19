import { BASEURL } from "@/constants";
import { useState } from "react";

export const useMutation = () => {
  const [state, setState] = useState({
    data: null,
    error: null,
    loading: false
  });
  const mutate = (endpoint: string, options: RequestInit) => {
    setState({ ...state, loading: true });
    return fetch(`${BASEURL}/${endpoint}`, options)
      .then((response) => response.json())
      .then((data) => setState({ data, error: null, loading: false }))
      .catch((err) =>
        setState({
          data: null,
          error: err,
          loading: false
        })
      );
  };
  return { mutate, state };
};
