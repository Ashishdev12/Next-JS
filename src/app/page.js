import Link from "next/link";
import ShareButton from "../components/ShareButton";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";


//  export const revalidate = 30 

const Page = async () => {
   console.log('Home page is returned')
  const products = await getProducts(8)
  return (
    <div>
      {/* Banner */}
      <div className="bg-blue-950 h-72">
        <h1 className="flex justify-center text-white font-bold text-3xl text-center py-32">
          India most loved<span className="text-orange-600 mx-2">fashion</span>
          platform for <span className="text-green-600 mx-2">coders</span>
        </h1>
      </div>

      {/* Cards */}
      <div className="m-4 flex flex-wrap gap-2">
        {products.data.map(item=> <ProductCard key={item.id} item={item}/>)}
       
      </div>
      <Link href='/products' className="inline-block text-orange-400 p-4 flex justify-center font-bold hover:underline">View All {">"}</Link>
    </div>
  );
};

export default Page;
