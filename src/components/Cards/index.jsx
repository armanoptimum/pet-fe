import {
  CardsHeaderStyled,
  CardsDetailStyled,
  CardsHeading,
  CardsParagraph,
  CardsStyled,
  CardsWrapperStyled,
  CardsButtonWrapperStyled,
  GiftBlockStyled,
} from './styled';
import Button from '@/components/shared/Button';
import arrowRight from '@/assets/icons/arrow-right-outline.svg';
import Card from './Card';

const Cards = ({ cardData, header, paragraph }) => {
  return (
    <CardsStyled>
      <CardsDetailStyled>
        <CardsHeaderStyled>
          <CardsParagraph>{header}</CardsParagraph>
          <CardsHeading>{paragraph}</CardsHeading>
        </CardsHeaderStyled>
        <CardsButtonWrapperStyled>
          <Button style="outline" icon={arrowRight}>
            View More
          </Button>
        </CardsButtonWrapperStyled>
      </CardsDetailStyled>
      <CardsWrapperStyled>
        {cardData.map((data, id) => (
          <Card key={id} {...data} />
        ))}
      </CardsWrapperStyled>
    </CardsStyled>
  );
};

export default Cards;
