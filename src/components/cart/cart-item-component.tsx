import { CartItem, useCartStore } from '@/store/cart'
import { Trash } from 'lucide-react'
import Image from 'next/image'

interface CardItemProps {
  cartItem: CartItem
}

export function CartItemComponent({
  cartItem: { product, quantity },
}: CardItemProps) {
  const { remove: removeProductCart } = useCartStore()

  return (
    <div
      className="flex items-center p-2 ps-0 hover:bg-zinc-700"
      data-test="cart-item-component"
    >
      <Image src={product.image} width={60} height={60} quality={50} alt="" />
      <div className="flex flex-col flex-1 items-start justify-center min-w-0">
        <span className="text-xs truncate max-w-full">{product.title}</span>
        <span className="text-xs font-semibold">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </span>
        <span className="text-xs">
          Quantidade: <span className="font-semibold">{quantity}</span>
        </span>
      </div>
      <button
        className="p-1 bg-red-500 rounded-sm hover:bg-red-600 active:bg-red-700"
        title="Remover"
        onClick={() => removeProductCart(product.id)}
        data-test="cart-item-component-remove-btn"
      >
        <Trash className="text-md w-4 h-4" />
      </button>
    </div>
  )
}
