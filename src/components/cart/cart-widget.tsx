'use client'

import { ShoppingBag } from 'lucide-react'

import { useCart } from '@/contexts/cart-context'
import { CartList } from './cart-list'

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="group flex items-center gap-2 relative">
      <ShoppingBag className="h-4 w-4" />
      <span className="text-sm">Cart ({items.length})</span>

      <CartList className="group-hover:block" items={items} />
    </div>
  )
}
