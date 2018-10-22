const expect = require('chai').expect;
let solution = require('../solutions/126').solution;

describe('Find the most frequent value in an array', () => {
  it('should return 3 as most frequent value for [1,2,3,3].', () => {
    const result = solution([1, 2, 3, 3]);
    expect(result).to.equal(3);
  });
  it('should return 2 as most frequent value for [1,2,3,3,4,2,2].', () => {
    const result = solution([1, 2, 3, 3, 4, 2, 2]);
    expect(result).to.equal(2);
  });
});
