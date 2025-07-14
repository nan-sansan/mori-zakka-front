import { getProductApi } from "@/api/product";
import Link from "next/link";
import Image from "next/image";
import { unWrap } from "@/util/resHelper";
import { makeImageUrl } from "@/util/urlHelper";

type Param = { id: string };

type Prop = {
  params: Promise<Param>;
};
export default async function Product({ params }: Prop) {
  const { id } = await params;
  const { images, name, price, category, quantity, description } = unWrap(
    await getProductApi(id)
  );

  return (
    <>
      <div className="session1">
        <div className="pic">
          <Link href="">
            <Image
              className="max-w-full max-h-full object-cover"
              src={makeImageUrl(images[0])}
              alt={name}
              width={200}
              height={150}
            />
          </Link>
        </div>
        <div></div>
      </div>
      <div className="session2"></div>
    </>
  );
}
