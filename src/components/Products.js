import React from 'react'
import { useFetchProductsQuery } from '../features/api/apiSlice'

const Products = () => {
  const { products, error, isLoading } = useFetchProductsQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching products</div>

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}

export default Products
