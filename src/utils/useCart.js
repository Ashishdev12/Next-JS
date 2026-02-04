import React, { useContext, useEffect, useState } from 'react'
import { ProductCtx } from '../components/Provider'

export const useCart = () => {
    const {cartItems,setCartItems} = useContext(ProductCtx)
    const [cartCount,setCartCount] = useState(0)
    const [cartTotal,setCartTotal] = useState(0)
 

    useEffect(()=>{
       setCartCount(cartItems.length)
       findTotalPrice()
       populateCartItems()
    },[cartItems])

    // for local storage function
   const populateCartItems = ()=>{
       // if items are in localstorage but not in context (happens when we refersh page)
       if(cartItems.length == 0){
        const products = localStorage.getItem("products")
        if(products){
            const temp = JSON.parse(products)
            setCartItems(temp)
        }
       }
   }

   // finding total price function
    const findTotalPrice  = ()=>{
        let amount = 0
        cartItems.forEach(item=>{
           amount += (item.price / 100) * item.quantity 
        })
        setCartTotal(amount)
    }

    // add Item function
    const addItem = (product)=>{
        
       const existingProductIndex = cartItems.findIndex((item)=>item.id == product.id)
       const updatedCart = [...cartItems]
       
       if(existingProductIndex != -1){
            updatedCart[existingProductIndex].quantity += 1
       }else{
           updatedCart.push({...product,quantity:1})
       }
       localStorage.setItem('products',JSON.stringify(updatedCart))
       setCartItems(updatedCart)

        
    }

    // delete by id Function
    const deleteById = (productId) =>{
        const newProducts = cartItems.filter(product=>productId != product.id)
        setCartItems(newProducts)
        if(newProducts.length == 0){
            localStorage.removeItem("products")
        }else{
            localStorage.setItem('products',JSON.stringify(newProducts))
        }
    }

    // delete all items function
    const deleteAllItems = ()=>{
        localStorage.removeItem("products")
        setCartItems([])
    }

    // Increment function
    const incrementCartItems = (productId)=>{
        const newProducts = cartItems.map(item=>{
            if(item.id == productId){
                return {
                    ...item,
                    quantity:item.quantity +1
                }
            }else{
                return item
            }
        })
        localStorage.setItem('products',JSON.stringify(newProducts))
        setCartItems(newProducts)
    }

    // decrement function
    const decrementCartItems = (productId)=>{
        const newProducts = cartItems.map(item=>{
            if(item.id == productId && item.quantity > 1){
                return {
                    ...item,
                    quantity:item.quantity - 1
                }
            }else{
                return item
            }
        })
        localStorage.setItem('products',JSON.stringify(newProducts))
        setCartItems(newProducts)
    }



  return {cartCount,cartItems,cartTotal,addItem,deleteAllItems,deleteById,incrementCartItems,decrementCartItems}
}