import { AxiosResult } from "@/api/fetchClient";

export const ensureSuccess = <T>(res: AxiosResult<T>) => {
  if (!res.data?.success) {
    throw new Error(res.data?.errorMsg ?? "未知錯誤");
  }
};

export const unWrap = <T>(res: AxiosResult<T>) => {
  ensureSuccess(res);
  if (!res.data?.content) {
    throw new Error("回傳格式錯誤");
  }

  return res.data.content;
};
