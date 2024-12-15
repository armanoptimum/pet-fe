'use client';
import styled from 'styled-components';
import Image from 'next/image';

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
  max-width: 18rem;

  @media (min-width: 60rem) {
    font-size: var(--font-size-body-medium);
    max-width: 30rem;
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
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;

  @media (min-width: 71.875rem) {
    margin-top: -100px;
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

export const BgBlockOneStyled = styled.div`
  width: 30rem;
  background-color: var(--color-secondary-mon-yellow);
  height: 40rem;
  position: absolute;
  transform: rotate(19deg);
  border-radius: 6.188rem;
  top: 10rem;
  overflow: hidden;
`;

export const BgBlockForthStyled = styled.div`
  width: 30rem;
  background-color: var(--color-primary-dark-blue);
  height: 40rem;
  position: absolute;
  transform: rotate(5deg);
  border-radius: 6.188rem;
  top: 11rem;
  left: -1rem;
`;

export const BgBlockTwoStyled = styled.div`
  width: 10rem;
  background-color: var(--color-secondary-mon-yellow);
  height: 40rem;
  position: absolute;
  transform: rotate(110deg);
  top: -25rem;
  left: -13rem;
  border-radius: 6.188rem;

  @media (min-width: 60rem) {
    top: -31rem;
    left: -15rem;
    width: 30rem;
  }
`;
