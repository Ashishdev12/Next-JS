"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useCart } from "../../utils/useCart";
import { handleCheckout } from "../../services/checkout-cart";
import { useRouter } from "next/navigation";

const page = () => {
  const {
    cartCount,
    cartItems,
    cartTotal,
    incrementCartItems,
    decrementCartItems,
    deleteAllItems,
    deleteById,
  } = useCart();


  const router = useRouter()

  const cartCheckout = async () => {
    try {
      const body = cartItems.map(item => {
        return {
          price: item.price_id,
          quantity: item.quantity
        }
      })
     const url = await handleCheckout(body);
    
    if (url) {
      console.log("Redirecting to stripe", url);
      router.push(url)
    } else {
      toast.error("Failed to get checkout session");
    }
  } catch(error) {
    console.error("Checkout error:", error);
    toast.error(`Checkout failed`);
  }
};


 useEffect(() => {
       
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
          toast.success('Order placed! You will receive an email confirmation.');
          deleteAllItems()
        }
    
        if (query.get('canceled')) {
            toast.error('Order canceled -- continue to shop around and checkout when you are ready.');
        }
      }, []);

  return (
    <div className="m-5 px-20">
      {cartCount > 0 ? (
        <>
          <h2 className="text-4xl font-semibold">Cart Item : {cartCount}</h2>
          <button
            onClick={deleteAllItems}
            className="text-orange-500 font-bold hover:text-red-600 hover:cursor-pointer mt-1"
          >
            Clear All <TrashIcon className="inline-block w-4 h-6 pb-1" />
          </button>
        </>
      ) : (
        <>
          <h2 className="text-4xl font-semibold bg-black text-white rounded p-4 text-center mb-10">
            Your shopping cart is Empty!!
          </h2>
          <Link
            href="/products"
            className="text-orange-600 font-semibold hover:text-orange-400 hover:cursor-pointer underline text-xl "
          >
            Shop Here ...
          </Link>
        </>
      )}

      {cartCount > 0 && (
        <div>
          {cartItems.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between border rounder-md p-4 my-2 bg-white hover:shadow-lg"
              >
                <Link
                  href={`/products/${item.id}`}
                  className="flex items-center"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-20 h-auto"
                  />
                  <p className="font-semibold text-xl ml-2">{item.name}</p>
                </Link>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decrementCartItems(item.id)}
                      disabled={item.quantity <= 1}
                      className="p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed"
                    >
                      <MinusIcon className="w-6 h-6" />
                    </button>
                    <p className="font-semibold text-xl">{item.quantity}</p>
                    <button
                      onClick={() => incrementCartItems(item.id)}
                      className="p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed"
                    >
                      <PlusIcon className="w-6 h-6" />
                    </button>
                  </div>
                  <p>
                    x{" "}
                    <span className="text-xl font-semibold ">
                      {item.price / 100}
                    </span>
                  </p>
                  <button
                    onClick={() => deleteById(item.id)}
                    className="text-orange-500 hover:text-red-600 hover:cursor-pointer font-semibold text-xl"
                  >
                    <XCircleIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            );
          })}

          <div className="flex flex-col items-end border-t py-4 mt-8">
            <p className="text-xl">
              Total{" "}
              <span className="font-bold text-green-500">{cartTotal}</span>
            </p>
            <button
              onClick={cartCheckout}
              className="bg-orange-500 p-2 rounded text-white mt-4 hover:cursor-pointer hover:bg-red-600 font-semibold"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default page;
