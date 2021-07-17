export default function* splitBefore<T>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean,
  maxSplit?: number
): Generator<T[], void, T[] & undefined> {
  let split = [];
  for (const element of iterable) {
    if (maxSplit == null || maxSplit > 0) {
      if (split.length && predicate(element)) {
        yield split;
        split = [];
        maxSplit = maxSplit && maxSplit - 1;
      }
    }
    split.push(element);
  }

  if (split.length) {
    yield split;
  }
}
