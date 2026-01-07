import Stripe from "stripe";

export const stripe = Stripe(process.env.SECRET_SK, {
    apiVersion: "2024-06-20",
});

export const formatAmount = (amount) => {
  if (!amount) return "Price not available";
  return `₹ ${amount / 100}`;
};