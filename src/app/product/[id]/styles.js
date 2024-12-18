'use client';
import styled from 'styled-components';

export const ProductStyled = styled.div`
  display: flex;
  padding: var(--spacing-main-vertical) var(--spacing-main-horizontal);
  gap: 2.125rem;
`;

export const ImageWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkuStyled = styled.p`
  color: var(--color-neutral-40);
  font-size: var(--font-size-body-medium);
`;

export const NameStyled = styled.h2``;

export const PriceStyled = styled.h2`
  color: var(--color-primary-dark-blue-80);
  font-size: var(--font-size-body-large);
`;

export const ContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContentListStyled = styled.ul`
  display: flex;
`;

export const ContentListItemStyled = styled.li`
  display: flex;
`;

export const ButtonsWrapperStyled = styled.div`
  display: flex;
  gap: 1rem;
`;

export const InformationBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InformationListStyled = styled.ul`
  display: flex;
  gap: 15rem;
  border-bottom: 0.03rem solid var(--color-neutral-40);
  padding: 1rem;
`;

export const InformationItemStyled = styled.li`
  color: var(--color-neutral-40);
  font-size: var(--font-size-body-medium);
`;
