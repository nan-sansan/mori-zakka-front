import Image from "next/image";
import Link from "next/link";
import { Product } from "@/api/product";

type Prop = {
  product: Product;
};

export default function ProductCard({ product }: Prop) {
  const { imageUrl, title, price } = product;
  return (
    <Link href="">
      <div
        className="bg-fuchsia-300 w-[200px] h-[250px] m-2 rounded-md
       "
      >
        <div className="w-full h-[150px] bg-amber-200 rounded-t-md">
          <Image src={imageUrl} alt={title} width={200} height={150} />
        </div>
        <div className="flex p-2 items-center">
          <div className="border-r h-[80px] mr-3"></div>
          <div className="">
            <p>{title}</p>
            <p>PRICE：{price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
