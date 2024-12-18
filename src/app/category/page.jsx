import Banner from '@/components/Banner';
import { bannerFourMock } from '@/components/Banner/data';
import Cards from '@/components/Cards';
import React from 'react';
import { CategoryContentWrapperStyled, CategoryStyled } from './styles';
import Filter from '@/components/Filter';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const ITEMS_PER_PAGE = 16;

const fetchPageData = async (type, page = 1, gender = '', color = '', breed = '') => {
  const res = await fetch(
    `${baseUrl}/api?type=${type}&page=${page}&limit=${ITEMS_PER_PAGE}&gender=${gender}&color=${color}&breed=${breed}`
  );
  const { data, total } = await res.json();
  return { data, total };
};

const Category = async ({ searchParams }) => {
  const params = await searchParams;
  const page = params.page;
  const gender = params.gender;
  const color = params.color;
  const breed = params.breed;
  const { data, total } = await fetchPageData('mock3', page, gender, color, breed);
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
          colCountMax={3}
        />
      </CategoryContentWrapperStyled>
    </CategoryStyled>
  );
};

export default Category;
