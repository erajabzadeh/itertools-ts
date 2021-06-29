export default function* dropWhile<T>(
  predicate: (t: T) => boolean,
  iterable: Iterable<T>
): Generator<T, void, T & undefined> {
  const iterator = iterable[Symbol.iterator]();
  let doneDropping = false;

  for (;;) {
    const { value, done } = iterator.next();
    if (done) {
      return;
    } else if (doneDropping) {
      yield value;
    } else if (!predicate(value)) {
      doneDropping = true;
      yield value;
    }
  }
}
