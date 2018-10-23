// flatten the array
//
const solution = (arr) => {
  if (arr.length === 0) {
    return arr;
  }
  let elem = arr.shift();
  if (elem.length) {
    elem.forEach((elem) => {
      arr.push(elem);
    });
    solution(arr);
  } else {
    solution(arr).push(elem);
  }
  return arr;
};

// Flatten a array
// Satish Jhanwer
// Check the performance on http://jsben.ch/ for below code
const flatten = (arr) => {
  return Array.isArray(arr) ? Array.prototype.concat(...arr.map(flatten)) : arr;
};

module.exports = {
  solution: solution,
};
