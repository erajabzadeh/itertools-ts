import filterfalse from '../src/filterfalse'

describe('filterfalse', () => {
  test('all false', () => {
    const result = filterfalse((e) => e % 2 === 0, [0, 2, 4, 6])
    expect(Array.from(result)).toStrictEqual([])
  })

  test('all true', () => {
    const result = filterfalse((e) => e % 2 !== 0, [0, 2, 4, 6])
    expect(Array.from(result)).toStrictEqual([0, 2, 4, 6])
  })

  test('some false', () => {
    const result = filterfalse((e) => e % 2 !== 0, [1, 2, 5, 9, 4])
    expect(Array.from(result)).toStrictEqual([2, 4])
  })

  test('empty', () => {
    const result = filterfalse((e) => e % 2 !== 0, [])
    expect(Array.from(result)).toStrictEqual([])
  })
})
