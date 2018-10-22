// Satish Jhanwer
// Find the most frequent value in an array

const solution = (arr) => {
  // Creating Hash Map based on the unique value from the input array.
  const myMap = arr.reduce((result, key) => {
    result[key] = key in result ? result[key] + 1 : 1;
    return result;
  }, {});

  // Defined the maxCount and resultant value which is most frequent
  let maxCount = 0;
  let result = -1;
  const entries = Object.entries(myMap);
  for (const [key, value] of entries) {
    if (maxCount < value) {
      result = key;
      maxCount = value;
    }
  }
  // Most frequent value in an array.
  return parseInt(result, 10);
};

module.exports = {
  solution,
};
