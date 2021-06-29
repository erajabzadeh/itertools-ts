export default function* compress<T>(
  iterable: Iterable<T>,
  selectors: Iterable<0 | 1 | true | false>
): Generator<T, void, T & undefined> {
  const selectorsIterator = selectors[Symbol.iterator]();

  for (const element of iterable) {
    const { value, done } = selectorsIterator.next();
    if (!done && value) {
      yield element;
    }
  }
}
