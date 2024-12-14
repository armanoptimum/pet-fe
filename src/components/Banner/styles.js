'use client'

import styled from "styled-components";

export const BannerStyled = styled.div`
  display: flex;
  color: var(--color-primary-dark-blue-80);
  padding: var(--spacing-main-vertical) var(--spacing-main-horizontal);
`;

export const BannerContentStyled = styled.div`
    width: 40%;
    padding-right: 10px;
`

export const BannerHeaderStyled = styled.h1`
    font-size: var(--font-size-heading-large-max);
    font-weight: var(--font-weight-bold-max);
`

export const BannerSubHeaderStyled = styled.h2`
      font-size: var(--font-size-heading-large);
`

export const BannerParagraphStyled = styled.p`
    font-size: var(--font-size-body-medium);
    font-weight: var(--font-weight-medium);
`

export const BannerBtnsStyled = styled.div`
    display: flex;
    gap: 1.25rem;
`

export const BannerImageContainerStyled = styled.div`
   width: 60%;
`
