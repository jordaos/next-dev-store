import { ProductCard } from '@/components/product-card'
import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { Metadata } from 'next'

/**
 * Cache & Memoization
 */

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <ProductCard product={highlightedProduct} size={6} />

      {otherProducts.map((product) => {
        return <ProductCard product={product} key={product.id} />
      })}
    </div>
  )
}
