import splitBefore from '../../src/more/splitBefore';

describe('splitBefore', () => {
  test('n = 1', () => {
    const result = splitBefore([1, 2, 3, 4], () => true);
    expect(Array.from(result)).toStrictEqual([[1], [2], [3], [4]]);
  });

  test('n = 2', () => {
    const result = splitBefore([1, 2, 3, 4], (i: number) => i % 2 === 0);
    expect(Array.from(result)).toStrictEqual([[1], [2, 3], [4]]);
  });

  test('n = 2, input.length % n != 0', () => {
    const result = splitBefore([1, 2, 3, 4, 5], (i: number) => i % 2 === 0);
    expect(Array.from(result)).toStrictEqual([[1], [2, 3], [4, 5]]);
  });

  test('maxSplit = 1', () => {
    const result = splitBefore([1, 2, 3, 4], () => true, 1);
    expect(Array.from(result)).toStrictEqual([[1], [2, 3, 4]]);
  });

  test('empty', () => {
    const result = splitBefore([], () => true);
    expect(Array.from(result)).toStrictEqual([]);
  });
});
