import Image from 'next/image';
import logo from '@/assets/icons/logo.svg';
import { HeaderStyled, ListItemStyled, ListStyled } from './styles';
import Button from '../shared/Button/Button';
import { BUTTON_STYLES } from '../shared/Button/constants';

const Header = () => {
  return (
    <HeaderStyled>
      <ListStyled>
        <ListItemStyled>
          <Image alt="logo" src={logo} priority />
        </ListItemStyled>
        <ListItemStyled>Home</ListItemStyled>
        <ListItemStyled>Category</ListItemStyled>
        <ListItemStyled>About</ListItemStyled>
        <ListItemStyled>Contact</ListItemStyled>
      </ListStyled>

      <ListStyled>
        <ListItemStyled>
          <Button style={BUTTON_STYLES.PRIMARY}>Join The Community</Button>
        </ListItemStyled>
      </ListStyled>
    </HeaderStyled>
  );
};

export default Header;
