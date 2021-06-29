import compress from '../src/compress'

describe('compress', () => {
  test('all inclusive', () => {
    const result = compress([1, 1, 2, 3, 5], [1, 1, 1, 1, 1])
    expect(Array.from(result)).toStrictEqual([1, 1, 2, 3, 5])
  })

  test('all exclusive', () => {
    const result = compress([1, 1, 2, 3, 5], [0, 0, 0, 0, 0])
    expect(Array.from(result)).toStrictEqual([])
  })

  test('mixed', () => {
    const result = compress([1, 1, 2, 3, 5], [1, 0, 1, 0, 1])
    expect(Array.from(result)).toStrictEqual([1, 2, 5])
  })

  test('mixed, boolean selectors', () => {
    const result = compress([1, 1, 2, 3, 5], [false, true, false, true, false])
    expect(Array.from(result)).toStrictEqual([1, 3])
  })

  test('mixed, empty selectors', () => {
    const result = compress([1, 1, 2, 3, 5], [])
    expect(Array.from(result)).toStrictEqual([])
  })

  test('empty', () => {
    expect(Array.from(compress([], []))).toStrictEqual([])
  })

  test('empty, non-empty selectors', () => {
    expect(Array.from(compress([], [1]))).toStrictEqual([])
  })
})
