import Link from "next/link";
import { formatAmount } from "../utils/stripe";
import Image from "next/image";

function ProductCard({ item }) {
  return (
    <div className="m-4 flex flex-wrap gap-2">
      <Link
        href={`./products/${item.id}`}
        className="w-full sm:w-64 border p-2 rounded-2xl hover:cursor-pointer hover:shadow-lg"
      >
        {/* Images */}
        <Image
          src={item.images[0]}
          alt={item.title || "Product image"}
          width={200}
          height={200}
        />

        {/* Content Section */}
        <div className=" flex justify-between flex-col ml-3 max-w-xs">
          <div>
            <h1 className="font-bold">{item.name}</h1>
            <p className="w-40 truncate">{item.description}</p>
          </div>

          {/* Price close to description */}
          <div className="text-orange-500 mt-1 text-base font-bold">
            {" "}
            {item.default_price?.unit_amount
              ? formatAmount(item.default_price.unit_amount)
              : "Price not available"}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
