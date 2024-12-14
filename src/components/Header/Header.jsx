import Image from 'next/image';
import logo from '@/assets/icons/logo.svg';
import searchIcon from '@/assets/icons/search.svg';
import regionImg from '@/assets/images/region.svg';
import arrowBottom from '@/assets/icons/arrow-bottom-small.svg';
import heartIcon from '@/assets/icons/heart.svg';
import cartIcon from '@/assets/icons/cart.svg';
import loopIcon from '@/assets/icons/loop.svg';
import loopMobileIcon from '@/assets/icons/loop-mobile.svg';
import logoMobile from '@/assets/icons/logo-mobile.svg';
import burger from '@/assets/icons/burger.svg';
import {
  HeaderStyled,
  LeftListBarStyled,
  RightListBarStyled,
  ListItemStyled,
  ListItemSearchBarStyled,
  ListItemSearchBarInputStyled,
  RegionStyled,
  RegionName,
  IconBars,
  MobileBar,
} from './styles';
import Button from '../shared/Button/Button';
import { BUTTON_STYLES } from '../shared/Button/constants';
import { listItemData } from './data';

const Header = () => {
  return (
    <HeaderStyled>
      <MobileBar>
        <Image alt="burger" src={burger} />
        <Image alt="logo" src={logoMobile} />
        <Image alt="search" src={loopIcon} />
      </MobileBar>

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
          <Image alt="region" src={regionImg} />
          <RegionName>VND</RegionName>
          <Image alt="arrow" src={arrowBottom} />
        </RegionStyled>
      </RightListBarStyled>

      <IconBars>
        <Image alt="favorite" src={heartIcon} />
        <Image alt="cart" src={cartIcon} />
        <Image alt="search" src={loopIcon} />
      </IconBars>
    </HeaderStyled>
  );
};

export default Header;
