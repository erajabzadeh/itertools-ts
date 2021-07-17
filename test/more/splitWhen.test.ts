import splitWhen from '../../src/more/splitWhen';

describe('splitWhen', () => {
  test('predicate = () => true', () => {
    const result = splitWhen([1, 2, 3, 4], () => true);
    expect(Array.from(result)).toStrictEqual([[1], [2], [3], [4]]);
  });

  test('predicate = x < y', () => {
    const result = splitWhen([1, 2, 3, 4], (x, y) => x < y);
    expect(Array.from(result)).toStrictEqual([[1], [2], [3], [4]]);
  });

  test('predicate = x > y', () => {
    const result = splitWhen([1, 2, 3, 4], (x, y) => x > y);
    expect(Array.from(result)).toStrictEqual([[1, 2, 3, 4]]);
  });

  test('predicate = x >= 2', () => {
    const result = splitWhen([1, 2, 3, 4], (x) => x >= 2);
    expect(Array.from(result)).toStrictEqual([[1, 2], [3], [4]]);
  });

  test('predicate = () => true, maxSplit = 1', () => {
    const result = splitWhen([1, 2, 3, 4], () => true, 1);
    expect(Array.from(result)).toStrictEqual([[1], [2, 3, 4]]);
  });

  test('predicate = x >= 2, maxSplit = 2', () => {
    const result = splitWhen([1, 2, 3, 4, 5], (x) => x >= 2, 2);
    expect(Array.from(result)).toStrictEqual([[1, 2], [3], [4, 5]]);
  });

  test('empty', () => {
    const result = splitWhen([], () => true);
    expect(Array.from(result)).toStrictEqual([]);
  });
});
