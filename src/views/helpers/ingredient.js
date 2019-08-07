exports.Ingredient = (obj) => {
  const arr = Object.keys(obj).reduce((acc, e) => {
    if (e.includes('Ingredient') && obj[e]) {
      acc[e] = obj[e];
    }
    return acc;
  }, {});
  return Object.values(arr);
};
