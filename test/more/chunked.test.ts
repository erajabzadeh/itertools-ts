import chunked from '../../src/more/chunked';

describe('chunked', () => {
  test('n = 1', () => {
    const result = chunked([1, 2, 3, 4], 1);
    expect(Array.from(result)).toStrictEqual([[1], [2], [3], [4]]);
  });

  test('n > 1', () => {
    const result = chunked([1, 2, 3, 4], 2);
    expect(Array.from(result)).toStrictEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test('input.length % n != 0', () => {
    const result = chunked([1, 2, 3, 4], 3);
    expect(Array.from(result)).toStrictEqual([[1, 2, 3], [4]]);
  });

  test('empty', () => {
    const result = chunked([], 3);
    expect(Array.from(result)).toStrictEqual([]);
  });
});
