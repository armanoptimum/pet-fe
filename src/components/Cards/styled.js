import styled from 'styled-components';

export const CardsStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-main-vertical) var(--spacing-main-horizontal);
  gap: 1.75rem;
  margin-top: 3.75rem;
`;

export const CardsWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  width: 100%;
  height: 100%;

  @media (min-width: 100rem) {
    grid-template-columns: ${({ $colCount }) => `repeat(${$colCount}, 1fr)`};
  }
`;
