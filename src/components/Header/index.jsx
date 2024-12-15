'use client'
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import { HeaderStyled } from './styles';

const Header = () => {
  return (
    <HeaderStyled>
      <Navbar />
      <Banner  />
    </HeaderStyled>
  );
};

export default Header;
