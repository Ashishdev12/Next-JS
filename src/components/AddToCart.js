"use client"
import toast, { Toaster } from "react-hot-toast"

const AddToCart = () => {
  const handleCartAdd = () =>{
    toast.success('Item add to cart')
  }
  return (
    <div>
      <button onClick={handleCartAdd} className='bg-orange-500 p-2 w-full rounded text-white mt-4 hover:cursor-pointer hover:bg-red-600 font-semibold'>Add To Cart</button>
      <Toaster/>
    </div>
  )
}

export default AddToCart
