import Cards from '@/components/Cards';
import React from 'react';
import { ProductWrapperSyled } from './styles';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const fetchPageData = async (type) => {
  const res = await fetch(`${baseUrl}/api?type=${type}`);
  const { data, total } = await res.json();
  return { data, total };
};

const ProductLayout = async ({ children }) => {
  const mock = await fetchPageData('mock1');
  return (
    <ProductWrapperSyled>
      <span>{children}</span>
      <Cards cardData={mock.data} paragraph="Our Lovely Customer" colCountMax={4} />
      <Cards cardData={mock.data} paragraph="Take a look at some of our pets" header="What's new?" colCountMax={4} />
    </ProductWrapperSyled>
  );
};

export default ProductLayout;
