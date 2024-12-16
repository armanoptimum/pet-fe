'use client';
import styled from 'styled-components';
import Image from 'next/image';

export const BannerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-primary-dark-blue-80);
  padding: var(--spacing-main-vertical) var(--spacing-main-horizontal) 0;
  gap: 2rem;
  background-color: ${({ $style }) => ($style === 'primary' ? ' ' : 'var(--color-primary-dark-blue)')};

  ${({ $style }) =>
    $style === 'secondary' &&
    `
      background-color: var(--color-secondary-mon-yellow-40);
      margin: var(--spacing-main-vertical) var(--spacing-main-horizontal);
      border-radius: var(--border-radius-secondary);
  `}

  @media (min-width: 71.875rem) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export const BannerContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-secondary);

  order: ${({ $reversed }) => ($reversed ? 1 : 2)};
  @media (min-width: 71.875rem) {
    align-items: center;
    order: ${({ $reversed }) => ($reversed ? 2 : 1)};
  }
`;

export const BannerHeaderStyled = styled.h1`
  font-size: var(--font-size-heading-medium);
  font-weight: var(--font-weight-bold-max);
  width: 100%;
  z-index: 3;
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
  max-width: 18rem;
  z-index: 3;

  @media (min-width: 60rem) {
    font-size: var(--font-size-body-medium);
    max-width: 30rem;
  }
`;

export const BannerBtnsStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  z-index: 3;

  @media (min-width: 60rem) {
    gap: 1.25rem;
  }
`;

export const BannerImageContainerStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 3;
  order: ${({ $reversed }) => ($reversed ? 1 : 2)};

  @media (min-width: 71.875rem) {
    margin-top: ${({ $style }) => ($style === 'primary' ? '-100px' : '')};
    width: 40%;
  }
`;

export const ImageStyledLarge = styled(Image)`
  display: block;

  @media (max-width: 60rem) {
    display: none;
  }
`;

export const ImageStyledSmall = styled(Image)`
  display: block;

  @media (min-width: 60rem) {
    display: none;
  }
`;

// export const BgBlock = styled.div`
//   display: ${({ $style }) => ($style === 'secondary' ? 'block' : 'none')};
//   position: absolute;
//   width: 40rem;
//   height: 30rem;
//   left: 0;
//   top: -10rem;
//   background-color: var(--color-secondary-mon-yellow-40);
//   border-radius: var(--border-radius-primary);
//   z-index: 1;
// `
