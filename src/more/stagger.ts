/**
 *
 * @param iterable
 * @param offsets
 * @param longest
 * @param fillValue
 * @returns
 */
export default function* stagger<T, F = any>(
  iterable: Iterable<T>,
  offsets = [-1, 0, 1],
  longest = false,
  fillValue?: F
): Generator<(T | F | undefined)[], void, (T | F)[] & undefined> {
  const maxOffset = Math.max(...offsets);
  const minOffset = Math.min(...offsets);
  const buffer: T[] = [];

  if (offsets?.length <= 0) {
    return;
  }

  for (let i = maxOffset; i < 0; i += 1) {
    yield new Array(offsets.length).fill(fillValue);
  }

  for (const iterator = iterable[Symbol.iterator](); ; ) {
    const { value, done } = iterator.next();
    if (done) {
      break;
    }

    buffer.push(value);
    const slack = buffer.length - maxOffset - 1;
    if (slack < 0) {
      continue;
    } else if (slack > Math.abs(minOffset)) {
      buffer.shift();
    }

    yield offsets.map(
      (offset) =>
        buffer[offset + Math.max(buffer.length - maxOffset - 1, 0)] || fillValue
    );
  }

  if (longest) {
    // TODO
  }
}
