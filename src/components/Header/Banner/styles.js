'use client';
import styled from 'styled-components';

export const BannerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-primary-dark-blue-80);
  padding: var(--spacing-main-vertical) var(--spacing-main-horizontal) 0;

  @media (min-width: 71.875rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BannerContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (min-width: 31.25rem) {
    align-items: center;
  }
`;

export const BannerHeaderStyled = styled.h1`
  font-size: var(--font-size-heading-medium);
  font-weight: var(--font-weight-bold-max);

  @media (min-width: 60rem) {
    gap: 5rem;
    font-size: var(--font-size-heading-large-max);
  }
`;

export const BannerSubHeaderStyled = styled.h2`
  margin-bottom: 1rem;

  @media (min-width: 60rem) {
    font-size: var(--font-size-heading-large);
  }
`;

export const BannerParagraphStyled = styled.p`
  color: var(--color-neutral-80);
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-medium);
  margin-bottom: 2.1rem;
  line-height: 1.5rem;
  max-width: 30rem;

  @media (min-width: 60rem) {
    font-size: var(--font-size-body-medium);
  }
`;

export const BannerBtnsStyled = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (min-width: 60rem) {
    gap: 1.25rem;
  }
`;

export const BannerImageContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  @media (min-width: 71.875rem) {
    margin-top: -100px;
    width: 40%;
  }
`;
