import { CheckIcon } from "@heroicons/react/24/solid";
import ShareButton from "../../../components/ShareButton";
import AddToCart from "../../../components/AddToCart";
import { getProducts, getProductsById } from "../../../services/productService";
import { formatAmount } from "../../../utils/stripe";
import Image from "next/image";
import { notFound } from "next/navigation";

//  export const revalidate = 30 //(validating after 30 sec getting data from server)
//  export const dynamicParams = true
// export const dynamic = "force-dynamic" // default is 'auto

// export const dynamicParams = false (making static file default is true it will fetch page on run time then make it static page.)

// This fun is used to convert dynamic to static route
export async function generateStaticParams() {
  const products = await getProducts();
  const slugs = products.data
    .filter((item) => {
      if (!item.id) {
        console.error("Invalid product ID found:", item);
        return false;
      }
      return true;
    })
    .map((item) => ({ slug: item.id }));

  console.log("Generated slugs:", slugs);
  return slugs;
}

// This fun generate meta info
export async function generateMetadata({ params }) {
  const { slug } =  await params;
  const product = await getProductsById(slug);
  if (!product) {
    notFound();
  }
  return {
    title: `Ashish website | ${product.name}`,
  };
}

const Product1 = async ({ params }) => {
  const { slug } = await params;
  console.log("Individual product page returned", slug);
  // console.log('product id:', slug)
  const product = await getProductsById(slug);

   if (!product) {
    notFound();
  }

  const clientProduct = {
    name: product.name,
    description: product.description,
    id: product.id,
    price: product.default_price.unit_amount,
     price_id: product.default_price.id.replace("prod_", "price_"),
    currency: "INR",
    image: product.images[0],
  };

 

  return (
    <div className="m-4 px-20">
      <div className="flex justify-around items-center flex-wrap m-4">
        <div className="w-80 h-80">
          <Image
            src={product.images?.[0] || "/Images/placeholder.png"}
            alt={product.title || "Product images"}
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>

        <div className="flex-1 max-w-md border rounded-md shadow-lg p-6 bg-white">
          <h2 className="text-3xl font-semibold">{product.name}</h2>
          <div className="flex pt-2 items-center gap-2">
            <CheckIcon className="text-lime-500 w-6 h-6" />
            <span className="font-semibold">In Stock</span> |
            <ShareButton />
          </div>
          <div className="mt-4 border-t pt-4">
            <p className="text-gray-500">Price:</p>
            <p className="font-semibold text-xl">
              {formatAmount(product.default_price?.unit_amount)}
            </p>
          </div>
          <AddToCart product={clientProduct} />
        </div>
      </div>
      <p className="m-40 text-2xl inline shadow-lg bg-slate-300 rounded-md p-2">
        {product.description}
      </p>
    </div>
  );
};

export default Product1;
