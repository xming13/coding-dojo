import answer from '../index';

describe('Code kata', () => {
  it('should return Fizz if the number is divisible by 3 or contains 3 and not divisible by 5', () => {
    expect(answer(3)).toEqual('Fizz');
    expect(answer(1203)).toEqual('Fizz');
    expect(answer(13)).toEqual('Fizz');
    expect(answer('123')).toEqual('Fizz');
  });
  it('should return Buzz if the number is divisible by 5 or contains 5 and not divisible by 3', () => {
    expect(answer(5)).toEqual('Buzz');
    expect(answer(1000)).toEqual('Buzz');
    expect(answer(52)).toEqual('Buzz');
  });
  it('should return FizzBuzz if the number is divisible by 3 and divisible by 5, or contains 3 and 5', () => {
    expect(answer(15)).toEqual('FizzBuzz');
    expect(answer(1800)).toEqual('FizzBuzz');
    expect(answer(353)).toEqual('FizzBuzz');
  });
  it('should return the number if the number is not divisible by 3 and not divisible by 5, and does not contain 3 or 5', () => {
    expect(answer(11)).toEqual(11);
    expect(answer(1004)).toEqual(1004);
    expect(answer('4')).toEqual('4');
    expect(answer('string')).toEqual('string');
  });
  it('should be able to use a custom ruleset', () => {
    const customRule = { 7: 'Foo', 8: 'Bar' };
    expect(answer(3, customRule)).toEqual(3);
    expect(answer(5, customRule)).toEqual(5);

    expect(answer(7, customRule)).toEqual('Foo');
    expect(answer(8, customRule)).toEqual('Bar');
    expect(answer(56, customRule)).toEqual('FooBar');

    expect(answer(17, customRule)).toEqual('Foo');
    expect(answer(18, customRule)).toEqual('Bar');
  });
});
