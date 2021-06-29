import repeat from '../src/repeat'

describe('repeat', () => {
  test('n = undefined', () => {
    const iter = repeat('a')
    const result = []

    for (let i = 0; i < 1000; i += 1) {
      result.push(iter.next().value)
    }

    expect(Array.from(result)).toHaveLength(1000)
    expect(new Set(result)).toHaveProperty('size', 1)
    expect([...new Set(result).values()]).toStrictEqual(['a'])
  })

  test('n = 1', () => {
    const result = repeat('a', 1)
    expect(Array.from(result)).toStrictEqual(['a'])
  })

  test('n < 0', () => {
    const result = repeat('a', -1)
    expect(Array.from(result)).toStrictEqual([])
  })
})
