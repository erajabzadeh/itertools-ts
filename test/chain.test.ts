import chain from '../src/chain'

describe('chain', () => {
  test('single array', () => {
    const result = chain([1, 1, 2, 3, 5, 8])
    expect(Array.from(result)).toStrictEqual([1, 1, 2, 3, 5, 8])
  })

  test('two arrays', () => {
    const result = chain([1, 1, 2], [3, 5, 8])
    expect(Array.from(result)).toStrictEqual([1, 1, 2, 3, 5, 8])
  })

  test('many arrays', () => {
    const result = chain([1], [1, 2], [3, 5], [8])
    expect(Array.from(result)).toStrictEqual([1, 1, 2, 3, 5, 8])
  })

  test('empty', () => {
    expect(Array.from(chain([]))).toStrictEqual([])
  })
})
