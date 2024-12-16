'use client';
import Header from '@/components/Header';

import { HomeStyled } from './styles';
import Cards from '@/components/Cards';

export default function Home() {
  return (
    <HomeStyled>
      <Header />
      <Cards />
    </HomeStyled>
  );
}
