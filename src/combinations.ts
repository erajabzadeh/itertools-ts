export default function* combinations<T>(
  iterable: Iterable<T>,
  r: number
): Generator<T[], void, T[] & undefined> {
  function* recurse(values: T[], r: number): Iterable<T[]> {
    if (r <= 0 || r > values.length) {
      yield [];
    } else if (values.length === r) {
      yield values;
    } else {
      const [head, ...tail] = values;
      for (const c of recurse(tail, r - 1)) {
        yield [head, ...c];
      }
      yield* recurse(tail, r);
    }
  }

  const values = Array.from(iterable);
  if (values.length && r > 0 && r <= values.length) {
    yield* recurse(values, r);
  }
}
