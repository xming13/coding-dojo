import answer from '../index';

describe('Code kata', () => {
  it('should return Fizz if the number is divisible by 3 and not divisible by 5', () => {
    expect(answer(3)).toEqual('Fizz');
    expect(answer(1203)).toEqual('Fizz');
  });
  it('should return Buzz if the number is divisible by 5 and not divisible by 3', () => {
    expect(answer(5)).toEqual('Buzz');
    expect(answer(1000)).toEqual('Buzz');
  });
  it('should return FizzBuzz if the number is divisible by 3 and divisible by 5', () => {
    expect(answer(15)).toEqual('FizzBuzz');
    expect(answer(1800)).toEqual('FizzBuzz');
  });
  it('should return the number if the number is not divisible by 3 and not divisible by 5', () => {
    expect(answer(11)).toEqual(11);
    expect(answer(1034)).toEqual(1034);
  });
});
