import { CardsStyled, CardsWrapperStyled } from './styled';
import CardPrimary from './CardPrimary';
import CardSecondary from './CardSecondary';
import SectionHeader from '@/components/SectionHeader';

const Cards = ({ cardData, type = 'primary', header, paragraph }) => {
  return (
    <CardsStyled>
      <SectionHeader header={header} paragraph={paragraph} />
      <CardsWrapperStyled $type={type}>
        {cardData.map((data, id) =>
          type === 'primary' ? <CardPrimary key={id} {...data} /> : <CardSecondary key={id} {...data} />
        )}
      </CardsWrapperStyled>
    </CardsStyled>
  );
};

export default Cards;
