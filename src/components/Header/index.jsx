'use client';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import { HeaderStyled } from './styles';
import { bannerMock } from '../Banner/data';

const Header = () => {
  return (
    <HeaderStyled>
      <Navbar />
      <Banner {...bannerMock} />
    </HeaderStyled>
  );
};

export default Header;
