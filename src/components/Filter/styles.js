import styled from 'styled-components';

export const FilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-main-vertical) var(--spacing-main-horizontal);
  gap: 1.75rem;
  margin-top: 3.75rem;
`;

export const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  border: 2px solid #007bff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background-color: white;
  display: inline-block;
  vertical-align: middle;
`;
