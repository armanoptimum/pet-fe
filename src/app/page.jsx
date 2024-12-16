'use client';
import Header from '@/components/Header';
import { bannerTwoMock } from '@/components/Banner/data';
import { HomeStyled } from './styles';
import Cards from '@/components/Cards';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <HomeStyled>
      <Header />
      <Cards />
      <Banner {...bannerTwoMock} reversed={true} style="secondary" />
    </HomeStyled>
  );
}
