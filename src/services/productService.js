import { stripe } from "../utils/stripe";

export const getProducts = async (limit) => {
  let products = {
    data: []
  }
  try {
     products = await stripe.products.list({
    limit: limit || 10,
    expand: ["data.default_price"],
  });
  //  console.log("---------------------all Products------------")
  // console.log(JSON.stringify(products,null,2))
    
  } catch (error) {
    console.log("ERROR From Stripe:", error);
    
  }
  
  return products;
};

export const getProductsById = async (productId) => {
  if (!productId || typeof productId !== "string") {
    console.error("Invalid productId passed to Stripe:", productId);
    return null;
  }

  let product = null;
  try {
    product = await stripe.products.retrieve(productId, {
      expand: ["default_price"],
    });
  } catch (error) {
    console.log("ERROR From Stripe:", error);
  }
  return product;
};