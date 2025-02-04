import axios from "axios";
import { toast } from "sonner";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
});

const isClient = typeof window !== "undefined";

http.interceptors.request.use((config) => {
  // add token to request headers if client side
  if (isClient) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

class ToastableHttpError extends Error {
  constructor(
    message: string,
    public errors?: string[],
  ) {
    super(message);

    this.name = "ToastableHttpError";

    if (errors) {
      this.errors = errors;
    }
  }
}

http.handleError = (error: unknown) => {
  // if is not client just log the error
  if (!isClient) {
    return console.error(error);
  }

  try {
    if (!axios.isAxiosError(error)) {
      throw new ToastableHttpError("An unknown error occurred");
    }

    if (!error.response) {
      throw new ToastableHttpError("An unknown error occurred");
    }

    const { errors, message } = error.response.data as {
      errors?: string[];
      message: string;
    };

    throw new ToastableHttpError(message, errors);
  } catch (error) {
    if (error instanceof ToastableHttpError) {
      const { errors, message } = error;

      toast.error(message, {
        description: errors?.join(", "),
      });
    } else {
      toast.error("An unknown error occurred");
    }
  }
};

http.fetcher = (url: string) => http.get(url).then((res) => res.data);

export default http;
