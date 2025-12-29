import Link from 'next/link'
import { formatAmount } from '../utils/strip'


function ProductCard({item}) {
  return (
    <div className="m-4 flex flex-wrap gap-2">
        <Link href={`./products/${item.id}`} className="w-full sm:w-64 border p-2 rounded-2xl hover:cursor-pointer hover:shadow-lg">

      {/* Images */}
        <img 
          src={item.images[0]}
          alt="white-shirt" 
          className=" w-46 h-36 object-cover rounded-xl"
        />

      {/* Content Section */}
          <div className=" flex justify-between flex-col ml-3 max-w-xs">
            <div>
              <h1 className="font-bold">{item.name}</h1>
              <p className="w-40 truncate">{item.description}</p>
            </div>

      {/* Price close to description */}
            <div className="text-orange-500 mt-1 text-base font-bold">{formatAmount(item.default_price.unit_amount)}</div>
          </div>
        </Link>

      </div>
    
  )
}

export default ProductCard
