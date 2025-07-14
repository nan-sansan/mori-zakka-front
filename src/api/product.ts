import fetchClient, { AxiosResult } from "./fetchClient";

export type Product = {
  id: number;
  images: string[];
  name: string;
  price: number;
  category: string;
  quantity: number;
  description: string;
};

export const getProductListApi = async (): Promise<AxiosResult<Product[]>> => {
  return fetchClient({
    url: "/products",
    method: "GET",
    params: {
      category: null,
      page: 0,
      size: 10,
    },
  });
};

export const getProductApi = async (
  productId: string
): Promise<AxiosResult<Product>> => {
  return fetchClient({
    url: `/products/${productId}`,
    method: "GET",
  });
};
