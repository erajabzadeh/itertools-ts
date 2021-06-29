import tee from '../src/tee'

describe('tee', () => {
  test('n = 1', () => {
    const result = tee([1, 2, 3, 4], 1)
    expect(result).toHaveLength(1)
    expect(Array.from(result[0])).toStrictEqual([1, 2, 3, 4])
  })

  test('n > 1', () => {
    const result = tee([1, 2, 3, 4], 2)
    expect(result).toHaveLength(2)
    expect(Array.from(result[0])).toStrictEqual([1, 2, 3, 4])
    expect(Array.from(result[1])).toStrictEqual([1, 2, 3, 4])
  })

  test('n = 0', () => {
    const result = tee([1, 2, 3, 4], 0)
    expect(result).toHaveLength(0)
  })
})
