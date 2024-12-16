import React from 'react';
import {
  SellersStyled,
  SellersHeaderStyled,
  SellersHeaderText,
  SellersContainerStyled,
  SellersImageStyled,
  BoldStyled,
  SellersTextWrapperStyled,
  SellersButtonWrapperStyled,
} from './styles';
import seller1Img from '@/assets/images/seller6.svg';
import seller2Img from '@/assets/images/seller2.svg';
import seller3Img from '@/assets/images/seller3.svg';
import seller4Img from '@/assets/images/seller4.svg';
import seller5Img from '@/assets/images/seller3.svg';
import seller6Img from '@/assets/images/seller6.svg';
import seller7Img from '@/assets/images/seller7.svg';
import arrowRight from '@/assets/icons/arrow-right-outline.svg';

import Button from '@/components/shared/Button';
import { BUTTON_STYLES } from '../shared/Button/constants';

const Sellers = () => {
  return (
    <SellersStyled>
      <SellersHeaderStyled>
        <SellersTextWrapperStyled>
          <SellersHeaderText>Proud to be part of</SellersHeaderText>
          <BoldStyled>Pet Sellers</BoldStyled>
        </SellersTextWrapperStyled>
        <SellersButtonWrapperStyled>
          <Button style={BUTTON_STYLES.OUTLINE} icon={arrowRight}>
            View All our sellers
          </Button>
        </SellersButtonWrapperStyled>
      </SellersHeaderStyled>
      <SellersContainerStyled>
        <SellersImageStyled alt="Seller" src={seller1Img} />
        <SellersImageStyled alt="Seller" src={seller2Img} />
        <SellersImageStyled alt="Seller" src={seller3Img} />
        <SellersImageStyled alt="Seller" src={seller4Img} />
        <SellersImageStyled alt="Seller" src={seller5Img} />
        <SellersImageStyled alt="Seller" src={seller6Img} />
        <SellersImageStyled alt="Seller" src={seller7Img} />
      </SellersContainerStyled>
    </SellersStyled>
  );
};

export default Sellers;
