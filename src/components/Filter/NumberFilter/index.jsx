import { FilterOptionWrapperStyled, NumberStyled, OptionNameStyled } from '../styles';

const NumberFilter = ({ data, children }) => {
  return (
    <FilterOptionWrapperStyled>
      <OptionNameStyled>{children}</OptionNameStyled>
      <NumberStyled $txt="Max" />
      <NumberStyled $txt="Min" />
    </FilterOptionWrapperStyled>
  );
};

export default NumberFilter;
