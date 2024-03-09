import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { Product } from '@/data/types/product'

export interface CartItem {
  product: Product
  quantity: number
}

interface CartStore {
  cart: CartItem[]
  add: (product: Product) => void
  remove: (productId: number) => void
  removeAll: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      add: (product: Product) =>
        set((state) => {
          const productInCart = state.cart.some(
            (item) => item.product.id === product.id,
          )

          if (productInCart) {
            const newCart = state.cart.map((item) => {
              if (item.product.id === product.id) {
                return { ...item, quantity: item.quantity + 1 }
              } else {
                return item
              }
            })

            return {
              cart: newCart,
            }
          } else {
            return { cart: [...state.cart, { product, quantity: 1 }] }
          }
        }),
      remove: (productId: number) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.product.id !== productId),
        })),
      removeAll: () => set({ cart: [] }),
    }),
    {
      name: 'cart-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)
