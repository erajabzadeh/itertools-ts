import starmap from '../src/starmap'

describe('starmap', () => {
  test('starmap', () => {
    const result = starmap(
      (a, b) => a * b,
      [
        [1, 2],
        [2, 3],
        [3, 4],
      ]
    )

    expect(Array.from(result)).toStrictEqual([2, 6, 12])
  })

  test('empty', () => {
    const result = starmap((a) => a, [])
    expect(Array.from(result)).toStrictEqual([])
  })
})
