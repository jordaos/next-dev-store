'use client'

import { Product } from '@/data/types/product'
import { ReactNode, createContext, useContext, useState } from 'react'

export interface CartItem {
  product: Product
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeProductCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(product: Product) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.product.id === product.id)

      if (productInCart) {
        return state.map((item) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { product, quantity: 1 }]
      }
    })
  }

  function removeProductCart(productId: number) {
    setCartItems((state) => {
      return state.filter((item) => item.product.id !== productId)
    })
  }

  return (
    <CartContext.Provider
      value={{ items: cartItems, addToCart, removeProductCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
