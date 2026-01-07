import { stripe } from "../../../utils/stripe";

export async function POST(req) {
  const items = await req.json();
  console.log("Checkout items:", items);

 try {
    const session = await stripe.checkout.sessions.create({
      line_items: items.map(item => ({
        price: item.price, // 👈 MUST be exactly this
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${req.headers.get("origin")}/cart?success=true`,
      cancel_url: `${req.headers.get("origin")}/cart?canceled=true`,
    });

    return Response.json({ session_url: session.url });
  } catch (err) {
    console.error("Stripe Error:", err.message);
    return Response.json({ error: "Checkout failed" }, { status: 500 });
  }
}