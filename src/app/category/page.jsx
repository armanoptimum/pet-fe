'use client';
import Banner from '@/components/Banner';
import { bannerFourMock } from '@/components/Banner/data';
import Cards from '@/components/Cards';
import { mockDogsTwo } from '@/components/Cards/data';
import React from 'react';
import { CategoryStyled } from './styles';

const Category = () => {
  return (
    <CategoryStyled>
      <Banner {...bannerFourMock} style="secondary" reversed />
      <Cards cardData={mockDogsTwo} paragraph="Small Dog" header="52 puppies" sectionType="secondary" />
    </CategoryStyled>
  );
};

export default Category;
