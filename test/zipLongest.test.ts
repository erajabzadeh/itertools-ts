import zipLongest from '../src/zipLongest'

describe('zipLongest', () => {
  test('empty', () => {
    const result = zipLongest([])
    expect(Array.from(result)).toStrictEqual([])
  })

  test('equal lengths', () => {
    const result = zipLongest([
      [1, 2, 3],
      [4, 5, 6],
    ])
    expect(Array.from(result)).toStrictEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ])
  })

  test('first shorter', () => {
    const result = zipLongest([
      [1, 2],
      [4, 5, 6],
    ])
    expect(Array.from(result)).toStrictEqual([
      [1, 4],
      [2, 5],
      [null, 6],
    ])
  })

  test('second shorter', () => {
    const result = zipLongest([
      [1, 2, 3],
      [4, 5],
    ])
    expect(Array.from(result)).toStrictEqual([
      [1, 4],
      [2, 5],
      [3, null],
    ])
  })

  test('second shorter, custom filler', () => {
    const result = zipLongest(
      [
        [1, 2, 3],
        [4, 5],
      ],
      0
    )
    expect(Array.from(result)).toStrictEqual([
      [1, 4],
      [2, 5],
      [3, 0],
    ])
  })
})
