'use client';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;

  background-color: var(--color-secondary-mon-yellow-40);

  @media (min-width: 71.875rem) {
    gap: 5rem;
  }
`;
