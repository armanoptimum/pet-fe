'use client';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-around;
  gap: 2.25rem;
  align-items: center;
  padding: var(--spacing-main-vertical) var(--spacing-main-horizontal);
  /* border: 1px solid black; */
`;

export const LeftListBarStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  color: var(--color-primary-dark-blue);
`;

export const RightListBarStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  color: var(--color-primary-dark-blue);
`;

export const ListItemStyled = styled.li`
  font-size: var(--font-size-body-medium);
  font-weight: var(--font-weight-bold);
`;

export const ListItemSearchBarStyled = styled.div`
  background-color: var(--color-neutral-00);
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  width: 17rem;
  border-radius: var(--border-radius-primary);
`;

export const ListItemSearchBarInputStyled = styled.input`
  border: none;
  outline: none;
  color: var(--color-neutral-40);

  &::placeholder {
    color: var(--color-neutral-40);
  }
`;

export const RegionStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
`;

export const RegionName = styled.p`
`