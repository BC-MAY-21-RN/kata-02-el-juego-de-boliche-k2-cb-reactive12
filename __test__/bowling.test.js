const { Bowling } = require('../bowling');

let bowlingTest = new Bowling();

let roll = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 0, 1, 7, 3, 6, 4, 10, 0, 2, 8, 6];
let score = [5, 14, 29, 49, 60, 61, 77, 97, 117, 133];


test('The score is correct', () => {
    expect(bowlingTest._getScore(roll)).toEqual(score);
});
