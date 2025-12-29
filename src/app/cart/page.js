import React from "react";
import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
const page = () => {
  const cartCount = 1;
  return (
    <div className="m-5 px-20">
      {cartCount > 0 ? (
        <>
          <h2 className="text-4xl font-semibold">Cart Item : {cartCount}</h2>
          <button className="text-orange-500 font-bold hover:text-red-600 hover:cursor-pointer mt-1">
            Clear All <TrashIcon className="inline-block w-4 h-6 pb-1" />
          </button>
        </>
      ) : (
        <>
          <h2 className="text-4xl font-semibold bg-black text-white rounded p-4 text-center mb-10">
            You'r shopping cart is Empty!!
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
          <div className="flex justify-between border rounder-md p-4 my-2 bg-white hover:shadow-lg">
            <Link href="/products/p1" className="flex items-center">
              <img src="/Images/1.png" className="w-20 h-auto" />
              <p className="font-semibold text-xl ml-2">Coding Shirt</p>
            </Link>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <button className="p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed">
                  <MinusIcon className="w-6 h-6" />
                </button>
                <p className="font-semibold text-xl">0</p>
                <button className="p-1 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white disabled:cursor-not-allowed">
                  <PlusIcon className="w-6 h-6" />
                </button>
              </div>
              <p>
                x <span className="text-xl font-semibold ">999</span>
              </p>
              <button className="text-orange-500 hover:text-red-600 hover:cursor-pointer font-semibold text-xl">
                <XCircleIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end border-t py-4 mt-8">
            <p className="text-xl">
              Total <span className="font-bold text-green-500">5000</span>
            </p>
            <button className='bg-orange-500 p-2 rounded text-white mt-4 hover:cursor-pointer hover:bg-red-600 font-semibold'>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
