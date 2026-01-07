import React from 'react'
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../../services/productService'


//  export const revalidate = 30 

 async function Product() {
  console.log('All Product page is returned')
  const products = await getProducts()
  return (
    <div className='my-4 mx-12 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

      {products.data.map((item)=>{
        return <ProductCard key={item.id} item={item}/>
      })}
    </div>
  )
}

export default Product
