'use client'

import Header from '@/components/Header';
import Banner from '@/components/Banner'
import { HomeStyled } from './styles';

export default function Home() {
  return (
    <HomeStyled>
      <Header />
      <Banner />
    </HomeStyled>
  );
}
