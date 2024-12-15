'use client';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0;
  background-color: var(--color-secondary-mon-yellow-40);

  @media (min-width: 60rem) {
    gap: 5rem;
  }
`;
