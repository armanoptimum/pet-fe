import arrowRight from '@/assets/icons/arrow-right-outline.svg';
import { CardsDetailStyled, CardsHeaderStyled, CardsParagraph, CardsHeading, CardsButtonWrapperStyled } from './styles';
import Button from '@/components/shared/Button';

const SectionHeader = ({ header, paragraph }) => {
  return (
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
  );
};

export default SectionHeader;
