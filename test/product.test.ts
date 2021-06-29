import product from '../src/product'

describe('product', () => {
  test('empty', () => {
    const result = product([])
    expect(Array.from(result)).toStrictEqual([])
  })

  test('all, n = undefined', () => {
    const result = product([1, 2])
    expect(Array.from(result)).toStrictEqual([[1], [2]])
  })

  test('all, n = values.length', () => {
    const result = product([1, 2], 2)
    expect(Array.from(result)).toStrictEqual([
      [1, 1],
      [1, 2],
      [2, 1],
      [2, 2],
    ])
  })

  test('all, n < values.length', () => {
    const result = product([1, 2], 1)
    expect(Array.from(result)).toStrictEqual([[1], [2]])
  })

  test('all, n > values.length', () => {
    const result = product([1, 2], 3)
    expect(Array.from(result)).toStrictEqual([
      [1, 1, 1],
      [1, 1, 2],
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
      [2, 1, 2],
      [2, 2, 1],
      [2, 2, 2],
    ])
  })

  test('empty, n = 0', () => {
    const result = product([], 0)
    expect(Array.from(result)).toStrictEqual([])
  })

  test('empty, n > 0', () => {
    const result = product([], 1)
    expect(Array.from(result)).toStrictEqual([])
  })

  test('empty, n < 0', () => {
    const result = product([], -1)
    expect(Array.from(result)).toStrictEqual([])
  })

  test('empty, n = MAX_SAGE_INTEGER', () => {
    const result = product([], Number.MAX_SAFE_INTEGER)
    expect(Array.from(result)).toStrictEqual([])
  })
})
