import { baseUrl } from "@/util/urlHelper";
import axios, { AxiosError, AxiosResponse } from "axios";

const fetchClient = axios.create({
  baseURL: baseUrl,
});
fetchClient.interceptors.request.use(
  async (config) => {
    const token = "";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

fetchClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<unknown>) => {
    const status = error.response?.status;

    const errMsg = "";

    switch (status) {
      case 400:
        error.message = "請求無效" + errMsg;
        break;
      case 401:
        error.message = "認證失敗" + errMsg;
        break;
      case 403:
        error.message = "無權進行此操作" + errMsg;
        break;
      case 404:
        const { baseURL, url, method } = error.config ?? {};
        const msg =
          !url || !method
            ? "找不到對應路徑"
            : `找不到對應路徑: ${`${baseURL}/${url}`.replace(
                /(?<!:)\/{2,}/g,
                "/"
              )} [${method.toUpperCase()}]`;
        error.message = msg;
        break;
      case 409:
        error.message = "操作衝突" + errMsg;
        break;
      case 422:
        error.message = "請求無法處理" + errMsg;
        break;
      default:
        if (!status || status >= 500) {
          console.error(error);
          error.message = "後端服務器發生錯誤，請稍後再試或聯繫系統管理員";
        }
    }
    return Promise.reject(error);
  }
);

export default fetchClient;

export type Result<T> = {
  success: boolean;
  content?: T;
  errorMsg: string;
  total?: number;
};

export type AxiosResult<T> = AxiosResponse<Result<T>>;
