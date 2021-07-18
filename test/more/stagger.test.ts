import stagger from '../../src/more/stagger';

describe('stagger', () => {
  test('n = 1, offsets = [0]', () => {
    const result = stagger(['a'], [0]);
    expect(Array.from(result)).toStrictEqual([['a']]);
  });

  test('n = 1, offsets = [-1]', () => {
    const result = stagger(['a'], [-1]);
    expect(Array.from(result)).toStrictEqual([[undefined], ['a']]);
  });

  test('n = 1, offsets = [-1]', () => {
    const result = stagger(['a'], [-1]);
    expect(Array.from(result)).toStrictEqual([[undefined], ['a']]);
  });

  test('n = 1, offsets = [1]', () => {
    const result = stagger(['a'], [1]);
    expect(Array.from(result)).toStrictEqual([]);
  });

  test('n = 1, offsets = []', () => {
    const result = stagger(['a'], []);
    expect(Array.from(result)).toStrictEqual([]);
  });

  test('n = 4, offsets = undefined', () => {
    const result = stagger([1, 2, 3, 4]);
    expect(Array.from(result)).toStrictEqual([
      [undefined, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
    ]);
  });

  test('n = 4, offsets = undefined, fillValue', () => {
    const result = stagger([1, 2, 3, 4], undefined, false, '-');
    expect(Array.from(result)).toStrictEqual([
      ['-', 1, 2],
      [1, 2, 3],
      [2, 3, 4],
    ]);
  });

  test('n = 4, offsets = [0, 1, 2]', () => {
    const result = stagger([1, 2, 3, 4], [0, 1, 2]);
    expect(Array.from(result)).toStrictEqual([
      [1, 2, 3],
      [2, 3, 4],
    ]);
  });

  test('n = 4, offsets = [1, 2, 3]', () => {
    const result = stagger([1, 2, 3, 4], [1, 2, 3]);
    expect(Array.from(result)).toStrictEqual([[2, 3, 4]]);
  });

  test('n = 4, offsets = [-2, -1, 0]', () => {
    const result = stagger([1, 2, 3, 4], [-2, -1, 0]);
    expect(Array.from(result)).toStrictEqual([
      [undefined, undefined, 1],
      [undefined, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
    ]);
  });

  test('n = 4, offsets = [-1, -2, -3]', () => {
    const result = stagger([1, 2, 3, 4], [-1, -2, -3]);
    expect(Array.from(result)).toStrictEqual([
      [undefined, undefined, undefined],
      [1, undefined, undefined],
      [2, 1, undefined],
      [3, 2, 1],
      [4, 3, 2],
    ]);
  });

  test('n = 3, offsets = [0]', () => {
    const result = stagger([1, 2, 3], [0]);
    expect(Array.from(result)).toStrictEqual([[1], [2], [3]]);
  });

  test('empty, offsets = undefined', () => {
    const result = stagger([]);
    expect(Array.from(result)).toStrictEqual([]);
  });

  test('empty, offsets = [-2, -1, 0]', () => {
    const result = stagger([], [-2, -1, 0]);
    expect(Array.from(result)).toStrictEqual([]);
  });
});
