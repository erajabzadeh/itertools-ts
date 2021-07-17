import splitInto from '../../src/more/splitInto';

describe('splitInto', () => {
  test('capacity = 1', () => {
    const result = splitInto([1, 2, 3, 4], [1, 1, 1, 1]);
    expect(Array.from(result)).toStrictEqual([[1], [2], [3], [4]]);
  });

  test('capacity = 2', () => {
    const result = splitInto([1, 2, 3, 4], [2, 2]);
    expect(Array.from(result)).toStrictEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test('sum(capacity) < input.length, capacity = [2, 1]', () => {
    const result = splitInto([1, 2, 3, 4], [2, 1]);
    expect(Array.from(result)).toStrictEqual([[1, 2], [3]]);
  });

  test('sum(capacity) < input.length, capacity = [2, 2]', () => {
    const result = splitInto([1, 2, 3, 4, 5], [2, 2]);
    expect(Array.from(result)).toStrictEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test('sum(capacity) > input.length, capacity = [3, 2, 1]', () => {
    const result = splitInto([1, 2, 3], [3, 2, 1]);
    expect(Array.from(result)).toStrictEqual([[1, 2, 3], [], []]);
  });

  test('sum(capacity) > input.length, capacity = [1, 1, 1, 1]', () => {
    const result = splitInto([1, 2, 3], [1, 1, 1, 1]);
    expect(Array.from(result)).toStrictEqual([[1], [2], [3], []]);
  });

  test('capacity = [1, null]', () => {
    const result = splitInto([1, 2, 3, 4], [1, null]);
    expect(Array.from(result)).toStrictEqual([[1], [2, 3, 4]]);
  });

  test('capacity = [null]', () => {
    const result = splitInto([1, 2, 3, 4], [null]);
    expect(Array.from(result)).toStrictEqual([[1, 2, 3, 4]]);
  });

  test('invalid capacity', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = splitInto([1, 2, 3, 4], ['a' as any]);
    expect(() => result.next()).toThrowError(/^Invalid capacity/);
  });

  test('empty', () => {
    const result = splitInto([], []);
    expect(Array.from(result)).toStrictEqual([]);
  });

  test('empty capacity', () => {
    const result = splitInto([1, 2, 3], []);
    expect(Array.from(result)).toStrictEqual([]);
  });
});
