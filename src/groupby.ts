export default function* groupby<T>(
  iterable: Iterable<T>,
  keyFn?: (t: T) => unknown
): Generator<T[], void, T[] & undefined> {
  const iterator = iterable[Symbol.iterator]();

  for (let first = true, value, group: T[] = []; ; ) {
    const { value: newValue, done } = iterator.next();
    if (done) {
      if (group.length) {
        yield group;
      }
      return;
    }

    const doneGrouping =
      !first && (keyFn ? keyFn(newValue) !== keyFn(value) : newValue !== value);
    if (doneGrouping) {
      yield group;
      group = [newValue];
    } else {
      group.push(newValue);
    }

    first = false;
    value = newValue;
  }
}
