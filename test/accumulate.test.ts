import accumulate from '../src/accumulate';

describe('accumulate', () => {
  const adder = <T extends number | string | bigint>(a: T, b: T) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
      return a + b;
    }
    return null;
  };

  const multiplier = (a: number, b: number) => a * b;

  test('number, adder', () => {
    const result = accumulate([1, 1, 2, 3, 5, 8], adder);
    expect(Array.from(result)).toStrictEqual([1, 2, 4, 7, 12, 20]);
  });

  test('number, multiplier', () => {
    const result = accumulate([1, 1, 2, 3, 5, 8], multiplier);
    expect(Array.from(result)).toStrictEqual([1, 1, 2, 6, 30, 240]);
  });

  test('string, custom accumulator', () => {
    const result = accumulate(['I', 'I', 'V', 'X'], adder);
    expect(Array.from(result)).toStrictEqual(['I', 'II', 'IIV', 'IIVX']);
  });

  test('empty', () => {
    expect(Array.from(accumulate([], adder))).toStrictEqual([]);
  });
});
