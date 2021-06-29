export default function* islice<T>(
  iterable: Iterable<T>,
  start = 0,
  end = Infinity
): Generator<T, void, T | undefined> {
  if (start >= end) {
    return;
  }

  const iterator = iterable[Symbol.iterator]();
  let done = false;

  for (let i = 0; !done && i < start; ++i) {
    done = Boolean(iterator.next().done);
  }

  for (let i = start; !done && i < end; ) {
    const next = iterator.next();
    if (!(done = Boolean(next.done))) {
      yield next.value;
    }

    if (Number.isFinite(end)) {
      i += 1;
    }
  }
}
