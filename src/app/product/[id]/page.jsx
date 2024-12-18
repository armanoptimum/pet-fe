import React from 'react';
import {
  ContentWrapperStyled,
  ImageWrapperStyled,
  ProductStyled,
  NameStyled,
  PriceStyled,
  ButtonsWrapperStyled,
  SkuStyled,
  InformationBlockStyled,
  InformationListStyled,
  InformationItemStyled,
} from './styles';
import detailImg from '@/assets/images/detail.svg';
import Image from 'next/image';
import Button from '@/components/shared/Button';
import { BUTTON_STYLES } from '@/components/shared/Button/constants';
import chatIcon from '@/assets/icons/chatIcon.svg';

const Product = () => {
  return (
    <ProductStyled>
      <ImageWrapperStyled>
        <Image alt="detail image" src={detailImg} />
      </ImageWrapperStyled>

      <ContentWrapperStyled>
        <SkuStyled>SKU #10000</SkuStyled>
        <NameStyled>Shibu</NameStyled>
        <PriceStyled>34.000.000 VND</PriceStyled>
        <ButtonsWrapperStyled>
          <Button>Contact Us</Button>
          <Button style={BUTTON_STYLES.OUTLINE} icon={chatIcon}>
            Chat with Monito
          </Button>
        </ButtonsWrapperStyled>
        <InformationBlockStyled>
          <InformationListStyled>
            <InformationItemStyled>Sku</InformationItemStyled>
            <InformationItemStyled>100000</InformationItemStyled>
          </InformationListStyled>
          <InformationListStyled>
            <InformationItemStyled>Sku</InformationItemStyled>
            <InformationItemStyled>100000</InformationItemStyled>
          </InformationListStyled>
          <InformationListStyled>
            <InformationItemStyled>Sku</InformationItemStyled>
            <InformationItemStyled>100000</InformationItemStyled>
          </InformationListStyled>
          <InformationListStyled>
            <InformationItemStyled>Sku</InformationItemStyled>
            <InformationItemStyled>100000</InformationItemStyled>
          </InformationListStyled>
          <InformationListStyled>
            <InformationItemStyled>Sku</InformationItemStyled>
            <InformationItemStyled>100000</InformationItemStyled>
          </InformationListStyled>
          <InformationListStyled>
            <InformationItemStyled>Sku</InformationItemStyled>
            <InformationItemStyled>100000</InformationItemStyled>
          </InformationListStyled>
          <InformationListStyled>
            <InformationItemStyled>Sku</InformationItemStyled>
            <InformationItemStyled>100000</InformationItemStyled>
          </InformationListStyled>
        </InformationBlockStyled>
      </ContentWrapperStyled>
    </ProductStyled>
  );
};

export default Product;
