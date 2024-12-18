import Banner from '@/components/Banner';
import { bannerFourMock } from '@/components/Banner/data';
import Cards from '@/components/Cards';
import React from 'react';
import { CategoryContentWrapperStyled, CategoryStyled } from './styles';
import Filter from '@/components/Filter';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const ITEMS_PER_PAGE = 15;

const fetchPageData = async (type, page) => {
  const res = await fetch(`${baseUrl}/api?type=${type}&page=${page}&limit=${ITEMS_PER_PAGE}`);
  const { data, total } = await res.json(); 
  return { data, total };
};
     
const Category = async ({ page }) => {
  const { data, total } = await fetchPageData('mock3');
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  return (
    <CategoryStyled>
      <Banner {...bannerFourMock} style="secondary" reversed />
      <CategoryContentWrapperStyled>
        <Filter />
        <Cards
          pagination={totalPages}
          cardData={data}
          paragraph="Small Dog"
          header={`${total} puppies`}
          sectionType="secondary"
          colCount={4}
        />
      </CategoryContentWrapperStyled>
    </CategoryStyled>
  );
};

export default Category;
