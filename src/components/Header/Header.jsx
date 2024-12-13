import Image from 'next/image';
import logo from '@/assets/icons/logo.svg';
import searchIcon from '@/assets/icons/search.svg';
import regionImg from '@/assets/images/region.svg';
import arrowBottom from '@/assets/icons/arrow-bottom-small.svg';
import {
  HeaderStyled,
  LeftListBarStyled,
  RightListBarStyled,
  ListItemStyled,
  ListItemSearchBarStyled,
  ListItemSearchBarInputStyled,
  RegionStyled,
} from './styles';
import Button from '../shared/Button/Button';
import { BUTTON_STYLES } from '../shared/Button/constants';
import { listItemData } from './data';

const Header = () => {
  return (
    <HeaderStyled>
      <LeftListBarStyled>
        <ListItemStyled>
          <Image alt="logo" src={logo} priority />
        </ListItemStyled>
        {listItemData.map((item) => (
          <ListItemStyled>{item}</ListItemStyled>
        ))}
      </LeftListBarStyled>

      <RightListBarStyled>
        <ListItemSearchBarStyled>
          <Image alt="search" src={searchIcon} />
          <ListItemSearchBarInputStyled type="text" placeholder="Search something here" />
        </ListItemSearchBarStyled>

        <ListItemStyled>
          <Button style={BUTTON_STYLES.PRIMARY}>Join The Community</Button>
        </ListItemStyled>

        <RegionStyled>
          <Image alt="button" src={regionImg} />
          <p>VND</p>
          <Image alt="button" src={arrowBottom} />
        </RegionStyled>
      </RightListBarStyled>
    </HeaderStyled>
  );
};

export default Header;
