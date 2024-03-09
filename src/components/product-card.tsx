import { Product } from '@/data/types/product'
import { Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { AddToCartButton } from './add-to-cart-button'

interface ProductCardProps {
  product: Product
  size?: number
}

export function ProductCard({ product, size = 3 }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={`group relative col-span-${size} row-span-${size} rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end`}
    >
      <Image
        src={product.image}
        className="group-hover:scale-105 transition-transform duration-500"
        width={920}
        height={920}
        quality={100}
        alt=""
      />

      <AddToCartButton
        product={product}
        isFabButton={true}
        className="absolute -bottom-12 right-4 shadow-md group-hover:bottom-2"
      />

      <div className="hidden group-hover:flex absolute top-4 right-4 h-12 items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
        <Tag />
        <span className="text-sm truncate">{product.title}</span>
        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </span>
      </div>
    </Link>
  )
}
