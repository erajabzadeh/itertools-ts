export default function* zipLongest<T>(
  iterables: Iterable<T>[],
  fillValue: T | null | undefined = null
): Generator<T[], void, T[] & undefined> {
  const iterators = iterables.map((iterable) => iterable[Symbol.iterator]());
  for (;;) {
    const nexts = iterators.map((iterator) => iterator.next());
    if (nexts.every(({ done }) => done)) {
      return;
    }
    yield nexts.map(({ value, done }) => (!done ? value : fillValue));
  }
}
