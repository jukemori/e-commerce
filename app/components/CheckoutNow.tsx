'use client'

import { ProductCart } from '@/app/components/AddToBag'
import { urlFor } from '@/app/lib/sanity'
import { Button } from '@/components/ui/button'
import { useShoppingCart } from 'use-shopping-cart'

export default function CheckoutNow({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart()
  function buyNow(priceId: string) {
    checkoutSingleItem(priceId)
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  }
  return (
    <Button
      onClick={() => {
        buyNow(product.price_id)
      }}
    >
      Checkout Now
    </Button>
  )
}
