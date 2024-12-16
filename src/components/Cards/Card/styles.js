'use client';
import Image from 'next/image';
import styled from 'styled-components';

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background-color: var(--color-neutral-00);
  border-radius: var(--border-radius-secondary);
  gap: 0.5rem;
`;

export const CardDetailsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 100rem) {
    flex-direction: row;
  }
`;

export const CardImageStyled = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-secondary);
`;

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.5rem 0.5rem 1.25rem 0.5rem;
`;
export const CardNameStyled = styled.h5`
  font-size: var(--font-size-body-medium);
`;

export const CardDetailStyled = styled.p`
  color: var(--color-neutral-60);
  font-size: var(--font-size-body-small);
`;

export const CardPriceStyled = styled.h5`
  font-size: var(--font-size-body-medium-s);
`;

export const CardsHeadingStyled = styled.h3`
  color: var(--color-primary-dark-blue);
  font-size: var(--font-size-heading-small-extra);
`;
