import predicate from '../../src/more/predicate';

describe('predicate', () => {
  test('predicate = () => true', () => {
    const results = predicate([1, 2, 3, 4], () => true);
    expect(Array.from(results[0])).toStrictEqual([1, 2, 3, 4]);
    expect(Array.from(results[1])).toStrictEqual([]);
  });

  test('predicate = () => false', () => {
    const results = predicate([1, 2, 3, 4], () => false);
    expect(Array.from(results[0])).toStrictEqual([]);
    expect(Array.from(results[1])).toStrictEqual([1, 2, 3, 4]);
  });

  test('predicate = (i) => i % 2 !== 0', () => {
    const results = predicate([1, 2, 3, 4], (i) => i % 2 !== 0);
    expect(Array.from(results[0])).toStrictEqual([1, 3]);
    expect(Array.from(results[1])).toStrictEqual([2, 4]);
  });

  test('predicate = (i) => i > 1', () => {
    const results = predicate([1, 2, 3, 4], (i) => i > 1);
    expect(Array.from(results[0])).toStrictEqual([2, 3, 4]);
    expect(Array.from(results[1])).toStrictEqual([1]);
  });

  test('predicate = (i) => i === 4', () => {
    const results = predicate([1, 2, 3, 4], (i) => i === 4);
    expect(Array.from(results[0])).toStrictEqual([4]);
    expect(Array.from(results[1])).toStrictEqual([1, 2, 3]);
  });

  test('empty', () => {
    const results = predicate([], () => true);
    expect(Array.from(results[0])).toStrictEqual([]);
    expect(Array.from(results[1])).toStrictEqual([]);
  });
});
