'use client'

import { useCart } from '@/contexts/cart-context'
import { Product } from '@/data/types/product'
import { ShoppingCart } from 'lucide-react'
import { MouseEvent } from 'react'
import { twMerge } from 'tailwind-merge'

export interface AddToCartButtonProps {
  product: Product
  isFabButton?: boolean
  className?: string
}

export function AddToCartButton({
  product,
  isFabButton = false,
  className = '',
}: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    addToCart(product)
  }

  return (
    <button
      type="button"
      onClick={(ev) => handleAddProductToCart(ev)}
      className={twMerge(
        `mt-8 flex h-12 ${isFabButton ? 'w-12' : ''} gap-2 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white hover:bg-emerald-700 active:bg-emerald-800 transition-all`,
        className,
      )}
    >
      <ShoppingCart />
      {!isFabButton ? <span>Adicionar ao carrinho</span> : ''}
    </button>
  )
}
