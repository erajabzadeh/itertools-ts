import cycle from '../src/cycle'

describe('cycle', () => {
  test('array', () => {
    const array = [1, 'a', 2, 'b']
    const result = cycle(array)
    for (let i = 0; i < 1000; ++i) {
      expect(result.next()).toMatchObject({
        done: false,
        value: array[i % array.length],
      })
    }
  })

  test('empty', () => {
    expect(Array.from(cycle([]))).toStrictEqual([])
  })
})
