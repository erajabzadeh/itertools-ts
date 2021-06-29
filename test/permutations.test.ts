import permutations from '../src/permutations'

describe('permutations', () => {
  test('n = 1, r = undefined', () => {
    const result = permutations([3])
    expect(Array.from(result)).toStrictEqual([[3]])
  })

  test('n > 1, r = 0', () => {
    const result = permutations([1, 2, 3], 0)
    expect(Array.from(result)).toStrictEqual([])
  })

  test('n > 1, r < 0', () => {
    const result = permutations([1, 2, 3], -1)
    expect(Array.from(result)).toStrictEqual([])
  })

  test('n > 1, r = undefined', () => {
    const result = permutations([1, 2, 3])
    expect(Array.from(result)).toStrictEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ])
  })

  test('n > 1, r < n', () => {
    const result = permutations([1, 2, 3], 2)
    expect(Array.from(result)).toStrictEqual([
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 3],
      [3, 1],
      [3, 2],
    ])
  })

  test('n > 1, r = 1', () => {
    const result = permutations([1, 2, 3], 1)
    expect(Array.from(result)).toStrictEqual([[1], [2], [3]])
  })

  test('empty, r = undefined', () => {
    const result = permutations([])
    expect(Array.from(result)).toStrictEqual([])
  })

  test('empty, r = 0', () => {
    const result = permutations([])
    expect(Array.from(result)).toStrictEqual([])
  })

  test('empty, r > 0', () => {
    const result = permutations([], 1)
    expect(Array.from(result)).toStrictEqual([])
  })

  test('empty, r < 0', () => {
    const result = permutations([], 1)
    expect(Array.from(result)).toStrictEqual([])
  })
})
