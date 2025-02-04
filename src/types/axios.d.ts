/* eslint-disable no-unused-vars */

declare module "axios" {
  export interface AxiosInstance {
    fetcher: <T>(url: string) => Promise<T>;
    handleError: (error: unknown) => void;
  }
}

export {};
