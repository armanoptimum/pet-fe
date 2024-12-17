'use client';
import Banner from '@/components/Banner';
import { bannerFourMock } from '@/components/Banner/data';
import Cards from '@/components/Cards';
import { mockDogsTwo } from '@/components/Cards/data';
import React from 'react';
import { CategoryContentWrapperStyled, CategoryStyled } from './styles';
import Filter from '@/components/Filter';

const Category = () => {
  return (
    <CategoryStyled>
      <Banner {...bannerFourMock} style="secondary" reversed />
      <CategoryContentWrapperStyled>
        <Filter />
        <Cards
          pagination={50}
          cardData={mockDogsTwo}
          paragraph="Small Dog"
          header="52 puppies"
          sectionType="secondary"
          colCount={3}
        />
      </CategoryContentWrapperStyled>
    </CategoryStyled>
  );
};

export default Category;
