import { getVariables } from "../helpers/getVariables";

const customFetch = async (endpoint, options) => {
  const baseURL = getVariables().VITE_API_URL;

  const defaultHeaders = {
    accept: "application/json",
  };

  const controller = new AbortController();
  options.signal = controller.signal;

  options.method = options.method || "GET";
  options.headers = options.headers
    ? { ...defaultHeaders, ...options.headers }
    : defaultHeaders;
  options.body = JSON.stringify(options.body) || false;
  if (!options.body) delete options.body;

  setTimeout(() => {
    controller.abort();
  }, 10000);

  try {
    const res = await fetch(baseURL + endpoint, options);
    const json = await res.json();
    return json;
  } catch (error) {
    return { error: "Algo salió mal... inténtelo más tarde" };
  }
};

export const connectionApi = {
  get: async (endpoint, options = {}) => customFetch(endpoint, options),
  post: async (endpoint, options = {}) => {
    options.method = "POST";
    options.headers = { "Content-Type": "application/json" };
    return customFetch(endpoint, options);
  },
};
