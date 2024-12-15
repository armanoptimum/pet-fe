'use client';

import styled from 'styled-components';

export const BannerStyled = styled.div`
  display: flex;
  color: var(--color-primary-dark-blue-80);
  padding: var(--spacing-main-vertical) var(--spacing-main-horizontal) 0;
  position: relative;
`;

export const BannerContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 30rem;
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
`;

export const BannerBtnsStyled = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const BannerImageContainerStyled = styled.div`
  margin-top: -120px;
  width: 30%;
`;
