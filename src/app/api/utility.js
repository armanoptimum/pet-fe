export const filterByGender = (data, genders) => {
  if (genders.length > 0 && genders[0] !== '') {
    data = data.filter((item) =>
      item.details.some((detail) => detail.key.toLowerCase() === 'gene' && genders.includes(detail.val.toLowerCase()))
    );
  }
  return data;
};
