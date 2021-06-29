import takeWhile from '../src/takeWhile'

describe('takeWhile', () => {
  test('take all', () => {
    const result = takeWhile((n: number) => n % 2 !== 0, [1, 3, 5, 7])
    expect(Array.from(result)).toStrictEqual([1, 3, 5, 7])
  })

  test('take first', () => {
    const result = takeWhile((n: number) => n % 2 !== 0, [1, 2, 3, 4])
    expect(Array.from(result)).toStrictEqual([1])
  })

  test('take all but last', () => {
    const result = takeWhile((n: number) => n % 2 === 0, [2, 4, 6, 4, 9])
    expect(Array.from(result)).toStrictEqual([2, 4, 6, 4])
  })

  test('take none', () => {
    const result = takeWhile((n: number) => n % 2 === 0, [2, 4, 8])
    expect(Array.from(result)).toStrictEqual([2, 4, 8])
  })

  test('empty', () => {
    expect(Array.from(takeWhile(() => false, []))).toStrictEqual([])
  })
})
