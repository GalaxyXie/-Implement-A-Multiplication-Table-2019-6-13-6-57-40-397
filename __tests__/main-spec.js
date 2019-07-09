const multiplicationTable = require('../main.js')

it ('should return false when start is smaller than end number', () => {
    expect(multiplicationTable.isEndBiggerThanStart(2, 3)).toBe(true);
});
it ('should return false when start is equal to end number', () => {
    expect(multiplicationTable.isEndBiggerThanStart(2, 2)).toBe(true);
});
it ('should return false when start is bigger than end number', () => {
    expect(multiplicationTable.isEndBiggerThanStart(3, 2)).toBe(false);
});

it ('should return false when start or end is out of range', () => {
    expect(multiplicationTable.isNumberInRange(-5, 100)).toBe(false);
});
it ('should return true when start and equal in the range', () => {
    expect(multiplicationTable.isNumberInRange(2, 2)).toBe(true);
});

it ('should return x*y=x*y when x,y are right', () => {
    expect(multiplicationTable.createMultiplyEquation(2, 2)).toBe("2*2=4");
});
it ('should return mulipleTable when multiper is right', () => {
    expect(multiplicationTable.getMultipleTable(2, 4)).toBe(
        "2*2=4 \n" +
        "2*3=6 3*3=9 \n" +
        "2*4=8 3*4=12 4*4=16 \n");
});
it ('should return null when multiper is wrong', () => {
    expect(multiplicationTable.getMultipleTable(4, 2)).toBe(null);
});
