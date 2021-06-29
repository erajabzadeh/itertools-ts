export default function* filterfalse<T>(
  predicate: (t: T) => boolean,
  iterable: Iterable<T>
): Generator<T, void, T & undefined> {
  for (const element of iterable) {
    if (!predicate(element)) {
      yield element;
    }
  }
}
