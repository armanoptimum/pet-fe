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

const CardPrimary = ({ img, name = '', details = [], price = '', currency = 'VND', gift = '' }) => {
  return (
    <CardStyled>
      <CardImageStyled src={img} alt="Card" />
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

export default CardPrimary;
