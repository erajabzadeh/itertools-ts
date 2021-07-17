import splitAt from '../../src/more/splitAt';

describe('splitAt', () => {
  test('n = 1', () => {
    const result = splitAt([1, 2, 3, 4], () => true);
    expect(Array.from(result)).toStrictEqual([[1], [2], [3], [4]]);
  });

  test('n = 2', () => {
    const result = splitAt([1, 2, 3, 4], (i: number) => i % 2 === 0);
    expect(Array.from(result)).toStrictEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test('n = 2, input.length % n != 0', () => {
    const result = splitAt([1, 2, 3, 4, 5], (i: number) => i % 2 === 0);
    expect(Array.from(result)).toStrictEqual([[1, 2], [3, 4], [5]]);
  });

  test('maxSplit = 1', () => {
    const result = splitAt([1, 2, 3, 4], () => true, 1);
    expect(Array.from(result)).toStrictEqual([[1], [2, 3, 4]]);
  });

  test('empty', () => {
    const result = splitAt([], () => true);
    expect(Array.from(result)).toStrictEqual([]);
  });
});
