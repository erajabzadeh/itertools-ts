export default function* chain<T>(
  ...iterators: Iterable<T>[]
): Generator<T, void, T & undefined> {
  for (const iterator of iterators) {
    yield* iterator;
  }
}
