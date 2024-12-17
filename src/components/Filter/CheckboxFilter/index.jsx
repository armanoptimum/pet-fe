import {
  FilterOptionWrapperStyled,
  OptionNameStyled,
  ActionWrapperStyled,
  CheckboxStyled,
  LabelStyled,
  ActionsWrapperStyled,
  ColorBlockStyled,
} from '../styles';

const CheckboxFilter = ({ data, children }) => {
  return (
    <FilterOptionWrapperStyled>
      <OptionNameStyled>{children}</OptionNameStyled>
      <ActionsWrapperStyled>
        {data.map(({ name, color }, id) => {
          return (
            <ActionWrapperStyled key={id}>
              <CheckboxStyled />
              {color && <ColorBlockStyled $color={color} />}
              <LabelStyled>{name}</LabelStyled>
            </ActionWrapperStyled>
          );
        })}
      </ActionsWrapperStyled>
    </FilterOptionWrapperStyled>
  );
};

export default CheckboxFilter;
