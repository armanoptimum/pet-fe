import Image from 'next/image';
import {
  CardStyled,
  CardImageStyled,
  CardInfoStyled,
  CardNameStyled,
  CardDetailStyled,
  CardPriceStyled,
  CardDetailsWrapperStyled,
  GiftBlockStyled,
  GiftNameStyled,
  GiftImageStyled,
  GiftDot,
} from './styles';
import giftIcon from '@/assets/icons/gift.svg';

const Card = ({ img, name = '', details = '', price = '', currency = 'VND', gift = '' }) => {
  return (
    <CardStyled>
      <CardImageStyled src={img} alt="dog" />
      <CardInfoStyled>
        <CardNameStyled>{name}</CardNameStyled>
        <CardDetailsWrapperStyled>
          {details.map(({ key, val }, id) => (
            <CardDetailStyled key={id}>
              {key} <strong>{val}</strong>
            </CardDetailStyled>
          ))}
        </CardDetailsWrapperStyled>
        <CardPriceStyled>
          {price}, {currency}
        </CardPriceStyled>
        {gift && (
          <GiftBlockStyled>
            <GiftImageStyled alt="gift" src={giftIcon} />
            <GiftDot />
            <GiftNameStyled>{gift}</GiftNameStyled>
          </GiftBlockStyled>
        )}
      </CardInfoStyled>
    </CardStyled>
  );
};

export default Card;
