'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  const [selectedOptions, setSelectedOptions] = useState({
    gender: [],
    color: [],
  });

  const handleCheckboxChange = (value) => {
    value = value.toLowerCase();
    const optionType = children.toLowerCase();

    setSelectedOptions((prevSelected) => {
      const updatedSelected = { ...prevSelected };
      if (updatedSelected[optionType].includes(value)) {
        updatedSelected[optionType] = updatedSelected[optionType].filter((item) => item !== value);
      } else {
        updatedSelected[optionType] = [...updatedSelected[optionType], value];
      }
      return updatedSelected;
    });
  };

  useEffect(() => {
    let queryString = '';
    if (selectedOptions.gender.length) {
      queryString = `?gender=${selectedOptions.gender.map((option) => encodeURIComponent(option)).join('&gender=')}`;
    } else if (selectedOptions.color.length) {
      queryString = `?color=${selectedOptions.color.map((option) => encodeURIComponent(option)).join('&color=')}`;
    }
    router.push(`${queryString}`);
  }, [selectedOptions, children, router]);

  return (
    <FilterOptionWrapperStyled>
      <OptionNameStyled>{children}</OptionNameStyled>
      <ActionsWrapperStyled>
        {data.map(({ name, color }, id) => {
          return (
            <ActionWrapperStyled key={id}>
              <CheckboxStyled type="checkbox" onChange={() => handleCheckboxChange(name)} />
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
