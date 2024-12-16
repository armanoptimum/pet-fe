import { CardStyled, CardImageStyled, CardInfoStyled, CardNameStyled, CardsTextStyled } from './styles';

const CardSecondary = ({ img, header, paragraph }) => {
  return (
    <CardStyled>
      <CardImageStyled src={img} alt="dog" />
      <CardInfoStyled>
        <CardNameStyled>{header}</CardNameStyled>
        <CardsTextStyled>{paragraph}</CardsTextStyled>
      </CardInfoStyled>
    </CardStyled>
  );
};

export default CardSecondary;
