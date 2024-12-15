import Navbar from './Navbar';
import Banner from './Banner';
import { HeaderStyled } from './styles';

const Header = () => {
  return (
    <HeaderStyled>
      <Navbar />
      <Banner />
    </HeaderStyled>
  );
};

export default Header;
