export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === 'colors') {
    // faltten array of array
    unique = unique.flat();
  }
  // Using Add and use set function to get unqiue values
  return ['all', ...new Set(unique)];
};
