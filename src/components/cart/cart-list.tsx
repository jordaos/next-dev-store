import { twMerge } from 'tailwind-merge'

import { CartItemComponent } from './cart-item-component'
import { CartItem } from '@/store/cart'

interface CartListProps {
  className?: string
  items: CartItem[]
}

export function CartList({ className, items }: CartListProps) {
  return (
    <div
      className={twMerge(
        'hidden bg-zinc-800 divide-y absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[100%] z-50 py-4 min-w-[250px] rounded-md text-center',
        className,
      )}
    >
      {!items.length ? (
        <span className="text-sm">Carrinho vazio</span>
      ) : (
        items.map((item) => (
          <CartItemComponent cartItem={item} key={item.product.id} />
        ))
      )}
    </div>
  )
}
