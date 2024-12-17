'use client'
import Banner from '@/components/Banner'
import { bannerFourMock } from '@/components/Banner/data'
import Cards from '@/components/Cards'
import { mockDogsTwo } from '@/components/Cards/data'
import React from 'react'

const Category = () => {
  return (
    <div>
        <Banner {...bannerFourMock} style="secondary" reversed />
        <Cards cardData={mockDogsTwo} paragraph="Small Dog" header="52 puppies" sectionType='secondary' />
    </div>
  )
}

export default Category