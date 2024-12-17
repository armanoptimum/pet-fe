'use client'
import Banner from '@/components/Banner'
import { bannerFourMock } from '@/components/Banner/data'
import React from 'react'

const Category = () => {
  return (
    <div>
        <Banner {...bannerFourMock} style="secondary" reversed />
    </div>
  )
}

export default Category