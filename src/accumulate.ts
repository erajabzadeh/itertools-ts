export default function* accumulate<T, R>(
  iterable: Iterable<T>,
  accumulator: (acc: T, b: T) => R
): Generator<T, unknown, R & undefined> {
  const iterator = iterable[Symbol.iterator]();

  const { value: first, done } = iterator.next();
  if (done) {
    return;
  }

  yield first;

  for (let acc = first; ; ) {
    const { value, done } = iterator.next();
    if (done) {
      return;
    }

    acc = accumulator(acc, value);
    yield acc;
  }
}
