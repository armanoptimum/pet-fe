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

const sku = 'SKU #10000'
const name = 'Shibu'
const price = '34.000.000 VND'

const info = {
  sku: "1000000",
  gender: 'female',
  age: 20,
  size: 'small',
  color: 'red',
  vaccinated: 'yes',
  dewormed: 'yes',
  cert: 'yes',
  microchip: 'yes',
  location: 'vietnam',
  publish: '23-10-9',
  addintional: `Pure breed Shih Tzu.
  Good body structure.
  With MKA cert and Microchip.
  Father from champion lineage.`
}

const Product = async ({ params }) => {
  const { id } = await params; 
  console.log(id)

  return (
    <ProductStyled>
      <ImageWrapperStyled>
        <Image alt="detail image" src={detailImg} />
      </ImageWrapperStyled>

      <ContentWrapperStyled>
        <SkuStyled>{sku}</SkuStyled>
        <NameStyled>{name}</NameStyled>
        <PriceStyled>{price}</PriceStyled>
        <ButtonsWrapperStyled>
          <Button>Contact Us</Button>
          <Button style={BUTTON_STYLES.OUTLINE} icon={chatIcon}>
            Chat with Monito
          </Button>
        </ButtonsWrapperStyled>
        <InformationBlockStyled>
          {Object.entries(info).map(([key, value]) => (
            <InformationListStyled key={key}>
              <InformationItemStyled>{key}</InformationItemStyled>
              <InformationItemStyled>{value}</InformationItemStyled>
            </InformationListStyled>
          ))}
        </InformationBlockStyled>
      </ContentWrapperStyled>
    </ProductStyled>
  );
};

export default Product;
