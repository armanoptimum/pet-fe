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
import { mockDogs } from './data';

const Cards = () => {
  return (
    <CardsStyled>
      <CardsDetailStyled>
        <CardsHeaderStyled>
          <CardsParagraph>Whats new?</CardsParagraph>
          <CardsHeading>Take a look at some of our pets</CardsHeading>
        </CardsHeaderStyled>
        <CardsButtonWrapperStyled>
          <Button style="outline" icon={arrowRight}>
            View More
          </Button>
        </CardsButtonWrapperStyled>
      </CardsDetailStyled>
      <CardsWrapperStyled>
        {mockDogs.map((data, id) => (
          <Card key={id} {...data} />
        ))}
      </CardsWrapperStyled>
    </CardsStyled>
  );
};

export default Cards;
