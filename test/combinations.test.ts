import combinations from '../src/combinations'

describe('combinations', () => {
  test('n > 1, r = 1', () => {
    const result = combinations([1, 2, 3], 1)
    expect(Array.from(result)).toStrictEqual([[1], [2], [3]])
  })

  test('n > 1, r > 1', () => {
    const result = combinations([1, 2, 3, 4, 5], 3)
    expect(Array.from(result)).toStrictEqual([
      [1, 2, 3],
      [1, 2, 4],
      [1, 2, 5],
      [1, 3, 4],
      [1, 3, 5],
      [1, 4, 5],
      [2, 3, 4],
      [2, 3, 5],
      [2, 4, 5],
      [3, 4, 5],
    ])
  })

  test('n > 1, r > n', () => {
    const result = combinations([1, 2, 3], 4)
    expect(Array.from(result)).toStrictEqual([])
  })

  test('n > 1, r < 0', () => {
    const result = combinations([1, 2, 3], -2)
    expect(Array.from(result)).toStrictEqual([])
  })

  test('n = r', () => {
    const result = combinations([1, 2, 3], 3)
    expect(Array.from(result)).toStrictEqual([[1, 2, 3]])
  })

  test('empty, r = 0', () => {
    const result = combinations([], 0)
    expect(Array.from(result)).toStrictEqual([])
  })

  test('empty, r > 0', () => {
    const result = combinations([], 1)
    expect(Array.from(result)).toStrictEqual([])
  })

  test('empty, r < 0', () => {
    const result = combinations([], -1)
    expect(Array.from(result)).toStrictEqual([])
  })
})
