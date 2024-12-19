import React from 'react';
import {
  ContentWrapperStyled,
  ImagesWrapperStyled,
  ProductStyled,
  NameStyled,
  PriceStyled,
  ButtonsWrapperStyled,
  SkuStyled,
  InformationBlockStyled,
  InformationListStyled,
  InformationItemStyled,
  ImageWrapperStyled,
} from './styles';
import Button from '@/components/shared/Button';
import { BUTTON_STYLES } from '@/components/shared/Button/constants';
import chatIcon from '@/assets/icons/chatIcon.svg';

const fetchData = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${id}`);
    return await res.json();
  } catch (e) {
    console.error(e);
  }
  return [];
};

const Product = async ({ params }) => {
  const { id } = await params;
  const data = await fetchData(id);
  if (data.length === 0) return <div>Not found</div>;

  return (
    <ProductStyled>
      <ImagesWrapperStyled>
        <ImageWrapperStyled width={600} height={600} alt="detail image" src={data.img} />
      </ImagesWrapperStyled>

      <ContentWrapperStyled>
        <SkuStyled>{data.info.sku} SKU</SkuStyled>
        <NameStyled>{data.name}</NameStyled>
        <PriceStyled>{data.price} VND</PriceStyled>
        <ButtonsWrapperStyled>
          <Button>Contact Us</Button>
          <Button style={BUTTON_STYLES.OUTLINE} icon={chatIcon}>
            Chat with Monito
          </Button>
        </ButtonsWrapperStyled>
        <InformationBlockStyled>
          {Object.entries(data.info).map(([key, value]) => (
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
