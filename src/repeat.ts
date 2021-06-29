export default function* repeat<T>(
  element: T,
  n = Infinity
): Generator<T, void, T & undefined> {
  for (; n > 0; n -= 1) {
    yield element;
  }
}
