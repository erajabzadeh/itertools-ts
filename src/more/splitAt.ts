export default function* splitAt<T>(
  iterable: Iterable<T>,
  predicate: (item: T) => boolean,
  maxSplit?: number
): Generator<T[], void, T[] & undefined> {
  let split = [];
  for (const element of iterable) {
    split.push(element);
    if (maxSplit == null || maxSplit > 0) {
      if (predicate(element)) {
        yield split;
        split = [];
        maxSplit = maxSplit && maxSplit - 1;
      }
    }
  }

  if (split.length) {
    yield split;
  }
}
