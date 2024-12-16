'use client';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import { HeaderStyled } from './styles';
import { bannerOneMock } from '../Banner/data';

const Header = () => {
  return (
    <HeaderStyled>
      <Navbar />
      <Banner {...bannerOneMock} />
    </HeaderStyled>
  );
};

export default Header;
