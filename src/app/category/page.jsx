import Banner from '@/components/Banner';
import { bannerFourMock } from '@/components/Banner/data';
import Cards from '@/components/Cards';
import React from 'react';
import { CategoryContentWrapperStyled, CategoryStyled } from './styles';
import Filter from '@/components/Filter';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const Category = async () => {
  let mock3 = [];
  try {
    mock3 = (await fetch(`${baseUrl}?type=mock3`).then((res) => res.json())) || [];
  } catch (err) {
    console.error(err);
  }
  return (
    <CategoryStyled>
      <Banner {...bannerFourMock} style="secondary" reversed />
      <CategoryContentWrapperStyled>
        <Filter />
        <Cards
          pagination={50}
          cardData={mock3}
          paragraph="Small Dog"
          header="52 puppies"
          sectionType="secondary"
          colCount={4}
        />
      </CategoryContentWrapperStyled>
    </CategoryStyled>
  );
};

export default Category;
