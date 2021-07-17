export default function* splitWhen<T>(
  iterable: Iterable<T>,
  predicate: (x: T, y: T) => boolean,
  maxSplit?: number
): Generator<T[], void, T[] | undefined> {
  let split: T[] = [];
  for (const element of iterable) {
    if (maxSplit == null || maxSplit > 0) {
      if (split.length && predicate(split[split.length - 1], element)) {
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
