import Image from "next/image";
import Link from "next/link";
import { Product } from "@/api/product";
import { makeImageUrl } from "@/util/urlHelper";

type Prop = {
  product: Product;
};

export default function ProductCard({ product }: Prop) {
  const { price, id, name, images } = product;
  return (
    <Link href={`/Products/${id}`}>
      <div
        className="bg-[var(--main-color)] w-[200px] h-[250px] m-2 rounded-md
       "
      >
        <div className="w-full h-[150px] bg-amber-200 rounded-t-md">
          <Image
            className="max-w-full max-h-full object-cover"
            src={makeImageUrl(images[0])}
            alt={name}
            width={200}
            height={150}
          />
        </div>
        <div className="flex p-2 items-center">
          <div className="border-r h-[80px] mr-3"></div>
          <div className="">
            <p>{name}</p>
            <p>PRICE：{price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
