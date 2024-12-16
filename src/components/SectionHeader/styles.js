import styled from 'styled-components';

export const CardsDetailStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardsHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CardsParagraph = styled.p``;

export const CardsHeading = styled.h3`
  color: var(--color-primary-dark-blue);
  font-size: var(--font-size-body-large);

  @media (min-width: 60rem) {
    font-size: var(--font-size-heading-small-extra);
  }
`;

export const CardsButtonWrapperStyled = styled.div`
  display: none;

  @media (min-width: 60rem) {
    display: block;
  }
`;
