import dropWhile from '../src/dropWhile'

describe('dropWhile', () => {
  test('drop all', () => {
    const result = dropWhile((n: number) => n % 2 !== 0, [1, 3, 5, 7])
    expect(Array.from(result)).toStrictEqual([])
  })

  test('drop first', () => {
    const result = dropWhile((n: number) => n % 2 !== 0, [1, 2, 3, 4])
    expect(Array.from(result)).toStrictEqual([2, 3, 4])
  })

  test('drop all but last', () => {
    const result = dropWhile((n: number) => n % 2 === 0, [2, 4, 6, 4, 9])
    expect(Array.from(result)).toStrictEqual([9])
  })

  test('drop none', () => {
    const result = dropWhile((n: number) => n % 2 === 0, [2, 4, 8])
    expect(Array.from(result)).toStrictEqual([])
  })

  test('empty', () => {
    expect(Array.from(dropWhile(() => false, []))).toStrictEqual([])
  })
})
