import islice from '../src/islice'

describe('islice', () => {
  test('all', () => {
    const result = islice([1, 3, 5, 7])
    expect(Array.from(result)).toStrictEqual([1, 3, 5, 7])
  })

  test('head', () => {
    const result = islice([2, 3, 4], 0, 1)
    expect(Array.from(result)).toStrictEqual([2])
  })

  test('tail', () => {
    const result = islice([2, 3, 4], 1)
    expect(Array.from(result)).toStrictEqual([3, 4])
  })

  test('none', () => {
    const result = islice([2, 4, 8], 0, 3)
    expect(Array.from(result)).toStrictEqual([2, 4, 8])
  })

  test('middle', () => {
    const result = islice([2, 4, 8], 1, 2)
    expect(Array.from(result)).toStrictEqual([4])
  })

  test('start extending beyond total length', () => {
    const result = islice([2, 4, 8], 4)
    expect(Array.from(result)).toStrictEqual([])
  })

  test('end extending beyond total length', () => {
    const result = islice([2, 4, 8], 1, 4)
    expect(Array.from(result)).toStrictEqual([4, 8])
  })

  test('start greater than end', () => {
    const result = islice([2, 4, 8], 2, 1)
    expect(Array.from(result)).toStrictEqual([])
  })

  test('empty', () => {
    expect(Array.from(islice([], 0))).toStrictEqual([])
  })
})
