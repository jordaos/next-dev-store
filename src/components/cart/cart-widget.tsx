'use client'

import { ShoppingBag } from 'lucide-react'

import { useCartStore } from '@/store/cart'
import { CartList } from './cart-list'

export function CartWidget() {
  const { cart } = useCartStore()

  return (
    <div className="group flex items-center gap-2 relative">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">Cart ({cart.length})</span>

      <CartList className="group-hover:block" items={cart} />
    </div>
  )
}
