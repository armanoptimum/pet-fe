'use client';
import styled from 'styled-components';

export const CardsStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-main-vertical) var(--spacing-main-horizontal);
  gap: 1.75rem;
  margin-top: 3.75rem;
`;
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

export const CardsWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  width: 100%;
  height: 100%;

  @media (min-width: 100rem) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CardsButtonWrapperStyled = styled.div`
  display: none;

  @media (min-width: 60rem) {
    display: block;
  }
`;
