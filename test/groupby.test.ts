import groupby from '../src/groupby'

describe('groupby', () => {
  test('all unique', () => {
    const result = groupby([1, 2, 3, 4])
    expect(Array.from(result)).toStrictEqual([[1], [2], [3], [4]])
  })

  test('all equal', () => {
    const result = groupby([1, 1, 1])
    expect(Array.from(result)).toStrictEqual([[1, 1, 1]])
  })

  test('multiple groups', () => {
    const result = groupby([1, 1, 2, 3, 3, 2])
    expect(Array.from(result)).toStrictEqual([[1, 1], [2], [3, 3], [2]])
  })

  test('empty', () => {
    const result = groupby([])
    expect(Array.from(result)).toStrictEqual([])
  })

  describe('key', () => {
    const keyFn = (o: Record<string, any>) => o.a

    test('all unique', () => {
      const result = Array.from(
        groupby([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }], keyFn)
      )
      expect(result).toHaveLength(4)
      expect(result[0]).toHaveLength(1)
      expect(result[0]).toStrictEqual([{ a: 1 }])
      expect(result[1]).toHaveLength(1)
      expect(result[1]).toStrictEqual([{ a: 2 }])
      expect(result[2]).toHaveLength(1)
      expect(result[2]).toStrictEqual([{ a: 3 }])
      expect(result[3]).toHaveLength(1)
      expect(result[3]).toStrictEqual([{ a: 4 }])
    })

    test('all equal', () => {
      const result = Array.from(groupby([{ a: 1 }, { a: 1 }, { a: 1 }], keyFn))
      expect(result).toHaveLength(1)
      expect(result[0]).toStrictEqual([{ a: 1 }, { a: 1 }, { a: 1 }])
    })

    test('empty', () => {
      const result = groupby([], keyFn)
      expect(Array.from(result)).toStrictEqual([])
    })
  })
})
