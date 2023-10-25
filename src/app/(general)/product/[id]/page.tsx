'use client'
import ProductItemAllDetail from '@/client/ProductItemAllDetail'
import React from 'react'

const page = ({
  params,
}: {
  params: { id: string };
}) => {
  console.log('sss  '+params.id)
  return (
        <ProductItemAllDetail id={params.id} />
  )
}

export default page