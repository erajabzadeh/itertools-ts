export default function* permutations<T>(
  iterable: Iterable<T>,
  r: number | null = null
): Generator<T[], void, T[] | undefined> {
  function* recurse(
    values: T[],
    r: number
  ): Generator<T[], void, T[] | undefined> {
    if (values.length === 1) {
      yield values;
    } else if (r === 1) {
      for (const value of values) {
        yield [value];
      }
    } else {
      for (let i = 0; i < values.length; i += 1) {
        const clone = [...values];
        clone.splice(i, 1);
        for (const p of recurse(clone, r - 1)) {
          yield [values[i], ...p];
        }
      }
    }
  }

  if (r == null || r > 0) {
    const values = Array.from(iterable);
    r ??= values.length;
    if (values.length && r <= values.length) {
      yield* recurse(values, r);
    }
  }
}
