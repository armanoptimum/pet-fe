export const filterByGender = (data, genders) => {
  if (genders.length > 0 && genders[0] !== '') {
    data = data.filter((item) =>
      item.details.some((detail) => detail.key.toLowerCase() === 'gene' && genders.includes(detail.val.toLowerCase()))
    );
  }
  return data;
};

export const filterByColor = (data, colors) => {
  if (colors.length > 0 && colors[0] !== '') {
    data = data.filter((item) => colors.includes(item.color));
  }
  return data;
};

export const filterByBreed = (data, breeds) => {
  if (breeds.length > 0 && breeds[0] !== '') {
    data = data.filter((item) => breeds.includes(item.breed));
  }
  return data;
};

export const filterByAge = (data, minAge, maxAge) => {
  console.log(minAge, maxAge);
  if (minAge !== null && maxAge !== null) {
    data = data.filter((item) => item.age >= minAge && item.age <= maxAge);
  } else if (minAge !== null) {
    data = data.filter((item) => item.age >= minAge);
  } else if (maxAge !== null) {
    data = data.filter((item) => item.age <= maxAge);
  }
  return data;
};
