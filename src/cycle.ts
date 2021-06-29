export default function* cycle<T>(
  iterable: Iterable<T>
): Generator<T, void, T> {
  const saved: T[] = [];

  for (const element of iterable) {
    yield element;
    saved.push(element);
  }

  if (saved.length) {
    for (let i = 0; ; i = (i + 1) % saved.length) {
      yield saved[i];
    }
  }
}
