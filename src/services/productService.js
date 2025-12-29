import { stripe } from "../utils/strip";

export const getProducts = async (limit)=>{
 const products = await stripe.products.list({
    limit:limit || 10,
    expand:['data.default_price']
  })
  //  console.log("---------------------all Products------------")
  // console.log(JSON.stringify(products,null,2))
  return products
}

export const getProductsById = async (productId)=>{
 const product = await stripe.products.retrieve(productId,{
    expand:['default_price']
  })
  // console.log("---------------------Product------------")
  // console.log(JSON.stringify(product,null,2))
  return product
}