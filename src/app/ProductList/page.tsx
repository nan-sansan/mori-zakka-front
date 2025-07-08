import Link from "next/link";
import ProductCard from "../_components/ProsuctCard";
import { Product } from "@/api/product";
const product: Product[] = [
  {
    id: 1,
    title: "上好美盤",
    price: 99,
    imageUrl: "/assets/card.png",
    category: "家用小物",
  },
  {
    id: 2,
    title: "好吃布丁",
    price: 120,
    imageUrl: "/assets/card2.png",
    category: "好吃甜點",
  },
  {
    id: 3,
    title: "經典奶酪",
    price: 80,
    imageUrl: "/assets/card3.png",
    category: "好吃甜點",
  },
];

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const productType = ["全部列表", "家用小物", "衣著配件"];
export default function ProductList({ searchParams }: Props) {
  const category = searchParams.category ?? "全部列表";

  return (
    <div>
      <div className="fixed w-[10vw] h-[600px]">
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
      <div className="flex flex-wrap ml-[10vw]">
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
