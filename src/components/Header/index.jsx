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
  RegionName,
  IconBars,
  MobileBar,
} from './styles';
import Button from '../shared/Button';
import { BUTTON_STYLES } from '../shared/Button/constants';
import { iconList, listItemData, mobileList } from './data';

const Header = () => {
  return (
    <HeaderStyled>
      <MobileBar>
        {mobileList.map(({ src, alt }, id) => (
          <Image key={id} alt={alt} src={src} />
        ))}
      </MobileBar>

      <LeftListBarStyled>
        <ListItemStyled>
          <Image alt="logo" src={logo} priority />
        </ListItemStyled>
        {listItemData.map((item, id) => (
          <ListItemStyled key={id}>{item}</ListItemStyled>
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
        {iconList.map(({ src, alt }, id) => (
          <Image key={id} alt={alt} src={src} />
        ))}
      </IconBars>
    </HeaderStyled>
  );
};

export default Header;
