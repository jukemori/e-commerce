'use client'

import { urlFor } from '@/app/lib/sanity'
import { Button } from '@/components/ui/button'
import { useShoppingCart } from 'use-shopping-cart'

export interface ProductCArt {
  name: string
  description: string
  price: number
  currency: string
  image: string
}

export default function AddToBag({
  name,
  description,
  price,
  currency,
  image,
}: ProductCArt) {
  const { addItem, handleCartClick } = useShoppingCart()

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    sku: 'lakdfask',
  }
  return (
    <Button
      onClick={() => {
        addItem(product)
        handleCartClick()
      }}
    >
      Add To Cart
    </Button>
  )
}
