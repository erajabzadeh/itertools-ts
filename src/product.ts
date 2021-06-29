export default function* product<T>(
  iterable: Iterable<T>,
  n = 1
): Generator<T[], void, T[] & undefined> {
  function* recurse(values: T[], current: T[], n: number): Iterable<T[]> {
    if (n <= 0) {
      if (!n && values.length) {
        yield current;
      }
      return;
    }

    for (const value of values) {
      yield* recurse(values, [...current, value], n - 1);
    }
  }

  yield* recurse(Array.from(iterable), [], n);
}
