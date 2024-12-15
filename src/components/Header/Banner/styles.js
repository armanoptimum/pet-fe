'use client';
import styled from 'styled-components';

export const BannerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-primary-dark-blue-80);
  padding: var(--spacing-main-vertical) var(--spacing-main-horizontal) 0;


  @media (min-width:  71.875rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BannerContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

export const BannerHeaderStyled = styled.h1`
  font-size: var(--font-size-heading-large-max);
  font-weight: var(--font-weight-bold-max);
`;

export const BannerSubHeaderStyled = styled.h2`
  font-size: var(--font-size-heading-large);
  margin-bottom: 1.5rem;
`;

export const BannerParagraphStyled = styled.p`
  color: var(--color-neutral-80);
  font-size: var(--font-size-body-medium);
  font-weight: var(--font-weight-medium);
  margin-bottom: 2.1rem;
  line-height: 1.5rem;
  max-width: 30rem;
`;

export const BannerBtnsStyled = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const BannerImageContainerStyled = styled.div`
  margin-top: -120px;
  margin-left: -210px;
  margin-right: -90px;

  @media (max-width: 92rem) {
    margin-right: -300px;
  }


  @media (min-width:  71.875rem) {
   // margin: 0;
  }
`;
