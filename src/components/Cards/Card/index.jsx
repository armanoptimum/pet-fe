import {
  CardStyled,
  CardImageStyled,
  CardInfoStyled,
  CardNameStyled,
  CardDetailStyled,
  CardPriceStyled,
  CardDetailsWrapperStyled,
} from './styles';

const Card = ({ img, name = '', details = '', price = '', currency = 'VND' }) => {
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
      </CardInfoStyled>
    </CardStyled>
  );
};

export default Card;
