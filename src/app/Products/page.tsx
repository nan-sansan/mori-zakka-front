import Link from "next/link";
import ProductCard from "../_components/ProsuctCard";
import { getProductListApi } from "@/api/product";
import * as React from "react";

type Props = {
  searchParams: Promise<{
    category: string | undefined;
  }>;
};

const productType = ["全部列表", "家用小物", "衣著配件", "???"];
export default async function ProductList({ searchParams }: Props) {
  const category = (await searchParams).category ?? "全部列表";

  const res = await getProductListApi();
  console.log(res.data.content);
  const product = res.data.content ?? [];

  return (
    <div className="mt-[50px]">
      <div className="side fixed w-[10vw] h-[600px] p-2">
        {productType.map((p) => (
          <div className="" key={p}>
            <Link
              href={`/ProductList${p === "全部列表" ? "" : "?category=" + p}`}
            >
              {p}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap ml-[10vw] max-w-[80vw]">
        {product
          .filter(
            (item) => item.category === category || category === "全部列表"
          )
          .map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
      </div>
    </div>
  );
}
