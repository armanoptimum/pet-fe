'use client';
import Header from '@/components/Header';
import { bannerTwoMock } from '@/components/Banner/data';
import { HomeStyled } from './styles';
import Cards from '@/components/Cards';
import Banner from '@/components/Banner';
import { mockDogs, mockProduct } from '@/components/Cards/data';
import Sellers from '@/components/Sellers';

export default function Home() {
  return (
    <HomeStyled>
      <Header />
      <Cards cardData={mockDogs} paragraph="Take a look at some of our pets" header="Whats new?" />
      <Banner {...bannerTwoMock} reversed={true} style="secondary" />
      <Cards cardData={mockProduct} paragraph="Hard to choose right products for your pets?" header="Our Products" />
      <Sellers />
    </HomeStyled>
  );
}
