import Stripe from "stripe";

export const stripe = Stripe(process.env.SECRET_SK)

export const formatAmount = (amount) => `₹ ${amount/100}`