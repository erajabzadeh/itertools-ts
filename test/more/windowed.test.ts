import windowed from '../../src/more/windowed';

describe('windowed', () => {
  test('n = 1', () => {
    const result = windowed([1, 2, 3, 4], 1);
    expect(Array.from(result)).toStrictEqual([[1], [2], [3], [4]]);
  });

  test('n = 1, step = 2', () => {
    const result = windowed([1, 2, 3, 4], 1, undefined, 2);
    expect(Array.from(result)).toStrictEqual([[1], [3]]);
  });

  test('n > 1', () => {
    const result = windowed([1, 2, 3, 4], 2);
    expect(Array.from(result)).toStrictEqual([
      [1, 2],
      [2, 3],
      [3, 4],
    ]);
  });

  test('n > 1, step < n', () => {
    const result = windowed([1, 2, 3, 4, 5, 6, 7], 4, undefined, 2);
    expect(Array.from(result)).toStrictEqual([
      [1, 2, 3, 4],
      [3, 4, 5, 6],
    ]);
  });

  test('n > 1, step > n', () => {
    const result = windowed([1, 2, 3, 4, 5, 6], 2, undefined, 3);
    expect(Array.from(result)).toStrictEqual([
      [1, 2],
      [4, 5],
    ]);
  });

  test('n = undefined', () => {
    const result = windowed([1, 2, 3, 4]);
    expect(Array.from(result)).toStrictEqual([[1], [2], [3], [4]]);
  });

  test('n = input.length', () => {
    const result = windowed([1, 2, 3], 3);
    expect(Array.from(result)).toStrictEqual([[1, 2, 3]]);
  });

  test('n > input.length', () => {
    const result = windowed([1, 2, 3], 4);
    expect(Array.from(result)).toStrictEqual([[1, 2, 3, undefined]]);
  });

  test('n > input.length, step > 1', () => {
    const result = windowed([1, 2, 3], 4, undefined, 2);
    expect(Array.from(result)).toStrictEqual([[1, 2, 3, undefined]]);
  });

  test('n > input.length, fillValue !== undefined', () => {
    const result = windowed([1, 2, 3], 4, '-');
    expect(Array.from(result)).toStrictEqual([[1, 2, 3, '-']]);
  });

  test('empty, n = 1', () => {
    const result = windowed([], 1);
    expect(Array.from(result)).toStrictEqual([[undefined]]);
  });

  test('empty, n > 1', () => {
    const result = windowed([], 3);
    expect(Array.from(result)).toStrictEqual([
      [undefined, undefined, undefined],
    ]);
  });

  test('empty, n > 1, fillValue !== undefined', () => {
    const result = windowed([], 3, '?');
    expect(Array.from(result)).toStrictEqual([['?', '?', '?']]);
  });

  test('empty, n > 1, step > 1', () => {
    const result = windowed([], 3, undefined, 2);
    expect(Array.from(result)).toStrictEqual([
      [undefined, undefined, undefined],
    ]);
  });
});
